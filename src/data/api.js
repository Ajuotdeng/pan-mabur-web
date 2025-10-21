const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';

function headers(auth = false) {
  const h = { 'Content-Type': 'application/json' };
  if (auth) {
    const t = localStorage.getItem('pm_token');
    if (t) h['Authorization'] = 'Bearer ' + t;
  }
  return h;
}

const api = {
  get: (path) => fetch(API_BASE + path, { headers: headers(false) }),
  post: (path, data, auth = false) =>
    fetch(API_BASE + path, { method: 'POST', headers: headers(auth), body: JSON.stringify(data) }),
  put: (path, data, auth = false) =>
    fetch(API_BASE + path, { method: 'PUT', headers: headers(auth), body: JSON.stringify(data) }),
  del: (path, auth = false) =>
    fetch(API_BASE + path, { method: 'DELETE', headers: headers(auth) }),
};

export default api;
