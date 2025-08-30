const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function loginUser(data) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
