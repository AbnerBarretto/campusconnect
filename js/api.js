/**
 * API Configuration
 * Detecta automaticamente se está em produção ou desenvolvimento
 * e retorna a URL base correta para chamadas de API
 */

function getApiUrl() {
  // Em desenvolvimento local (localhost)
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return "http://localhost:3333";
  }

  // Em produção (Vercel ou qualquer servidor)
  // Use URL relativa para pegar do mesmo domínio
  return "/api";
}

// Criar um objeto global para facilitar acesso
const API_BASE_URL = getApiUrl();

console.log(`[API] Using base URL: ${API_BASE_URL}`);
