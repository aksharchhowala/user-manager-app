const TOKEN_KEY = "authToken";
const REDIRECT_KEY = "postLoginRedirect";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function rememberRedirect(path) {
  if (!path) return;
  sessionStorage.setItem(REDIRECT_KEY, path);
}

export function consumeRedirect() {
  const path = sessionStorage.getItem(REDIRECT_KEY);
  if (path) sessionStorage.removeItem(REDIRECT_KEY);
  return path;
}
