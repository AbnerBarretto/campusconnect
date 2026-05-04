/**
 * API Configuration
 * Detecta automaticamente se está em produção ou desenvolvimento
 * e retorna a URL base correta para chamadas de API
 */

function getApiUrl() {
  // Retorna vazio pois os arquivos frontend já incluem /api nas chamadas
  return "";
}

// Criar um objeto global para facilitar acesso
const API_BASE_URL = getApiUrl();

console.log(`[API] Using base URL: ${API_BASE_URL}`);
