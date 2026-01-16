const DEFAULT_API_URL = "http://localhost:4000";

export function getApiBaseUrl() {
  if (typeof window === "undefined") {
    return DEFAULT_API_URL;
  }
  if (window.__TRANO_API_URL__) {
    return window.__TRANO_API_URL__;
  }
  if (window.location.hostname === "localhost") {
    return DEFAULT_API_URL;
  }
  return "";
}

export async function apiFetch(path, options = {}) {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {})
    },
    ...options
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with status ${response.status}`);
  }

  return response.json();
}
