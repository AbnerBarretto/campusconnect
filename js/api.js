/**
 * API Configuration
 * Usar caminhos relativos é mais seguro para diferentes ambientes (localhost, 127.0.0.1, etc)
 */

const API_BASE_URL = ""; // Vazio para usar o mesmo domínio/porta do navegador

console.log(`[API] Base URL set to: "${API_BASE_URL}" (Relative)`);

// Automatically update notices badge count in sidebar
document.addEventListener("DOMContentLoaded", async () => {
  const badges = document.querySelectorAll(".alerts-count-badge");
  if (badges.length === 0) return;

  const updateBadges = (count) => {
    badges.forEach(badge => {
      badge.textContent = count;
    });
  };

  try {
    const res = await fetch(`${API_BASE_URL}/api/avisos`);
    if (!res.ok) throw new Error();
    const avisos = await res.json();
    const active = avisos.filter(a => a.ativo !== false).length;
    updateBadges(active);
  } catch (_) {
    const saved = localStorage.getItem("infra-alerts");
    if (saved) {
      const avisos = JSON.parse(saved);
      const active = avisos.filter(a => a.ativo !== false).length;
      updateBadges(active);
    } else {
      updateBadges("4"); // default fallback count
    }
  }
});
