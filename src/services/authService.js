// src/services/authService.js
const ADMIN_EMAIL = 'adminpks@jasaraharja.co.id';
const ADMIN_PASSWORD = 'admin01';
const SESSION_KEY = 'pks_admin_session';

export const authService = {
  login(email, password) {
    return new Promise((resolve, reject) => {
      // Simulasi delay jaringan 800ms
      setTimeout(() => {
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          const sessionData = {
            email: ADMIN_EMAIL,
            name: 'Budi (Admin PKS)',
            role: 'Admin',
            loggedInAt: new Date().toISOString()
          };
          localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
          resolve(sessionData);
        } else {
          reject(new Error('Email atau password yang dimasukkan tidak sesuai.'));
        }
      }, 800);
    });
  },

  logout() {
    localStorage.removeItem(SESSION_KEY);
  },

  getCurrentUser() {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) return null;
    try {
      return JSON.parse(session);
    } catch {
      return null;
    }
  },

  isAuthenticated() {
    return !!this.getCurrentUser();
  }
};
