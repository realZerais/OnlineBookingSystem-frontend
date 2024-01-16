// auth.js
import { writable } from 'svelte/store';

const isServer = typeof window === 'undefined';

const { subscribe, set } = writable(checkAccessToken());

function checkAccessToken() {
  if (isServer) {
    // On the server, assume the user is not authenticated
    return false;
  }

  const accessToken = getCookie('token');
  return accessToken !== null;
}

function getCookie(name) {
  if (isServer) {
    return null;
  }

  const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=');
    acc[key] = value;
    return acc;
  }, {});

  return cookies[name] || null;
}

export const isAuthenticated = {
  subscribe,
  set: (value) => {
    set(value);
    if (value) {
      // Optionally perform actions when the user is authenticated
    }
  },
};
