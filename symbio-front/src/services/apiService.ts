const isProduction = import.meta.env.MODE === 'production';

const BASE_URL = isProduction 
  ? 'https://symbio-java-k2x1.onrender.com' 
  : '/api';
interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function request<T>(endpoint: string, options?: RequestOptions, retries = 10, backoff = 2000): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options?.headers,
    },
  };

  try {
    console.log(`[API] Tentativa ${11 - retries}/10 em: ${url}`);
    const response = await fetch(url, config);
    
    if (!response.ok) {
      if ((response.status >= 500 || response.status === 404) && retries > 0) {
        console.warn(`[API] Servidor instável (${response.status}). Retentando em ${backoff/1000}s...`);
        await wait(backoff);
        return request<T>(endpoint, options, retries - 1, backoff); 
      }
    
      let errorMessage = `Erro API: ${response.status} - ${response.statusText}`;
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) errorMessage = errorData.message;
      } catch (e) {

      }
      throw new Error(errorMessage);
    }

    if (response.status === 204) return {} as T;

    return await response.json();

  } catch (error) {
    if (retries > 0) {
      console.warn(`[API] Falha de conexão (Network Error). O Render pode estar dormindo. Retentando... (${retries} restantes)`);
      await wait(backoff);
      return request<T>(endpoint, options, retries - 1, backoff);
    }
    
    console.error(`[API FINAL ERROR] Falha definitiva em ${endpoint}`);
    throw error;
  }
}

export const apiService = {
  get: <T>(endpoint: string) => request<T>(endpoint, { method: 'GET' }),
  post: <T>(endpoint: string, body: any) => request<T>(endpoint, { method: 'POST', body: JSON.stringify(body) }),
  put: <T>(endpoint: string, body: any) => request<T>(endpoint, { method: 'PUT', body: JSON.stringify(body) }),
  delete: <T>(endpoint: string) => request<T>(endpoint, { method: 'DELETE' }),
};