// auth.js
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

export const isAuthenticated = writable(false);
export const userName = writable('no user');
export const userRole = writable('no role');


function getCookieValue(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  // Return null if the cookie is not found
  return null;
}

export const fetchUser = async () => {
  try {

    const isAuthenticatedLocally = document.cookie.includes('accessToken');

    // Update the store to reflect the authentication state
    isAuthenticated.set(isAuthenticatedLocally);

    if (isAuthenticatedLocally) {
      userName.set(getCookieValue("username"));
      userRole.set(getCookieValue("role"));
    }
  } catch (error) {
    console.error(error);
  }
};

function clearCookies() {

  const cookieNames = ['accessToken', 'username', 'role'];

  // Iterate through the cookie names and set their expiration to the past
  cookieNames.forEach((cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
}

export const logout = () => {
  userName.set('no user');
  userRole.set('no role');
  isAuthenticated.set(false);
  clearCookies();
  goto('/login');
};

