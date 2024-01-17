// auth.js
import { writable } from 'svelte/store';


export const isAuthenticated = writable(false);

// export const fetchUser = async () => {
//   try {
//     // Example: Check if the user is authenticated
//     const isAuthenticatedLocally = document.cookie.includes('token');
//     console.log(isAuthenticatedLocally);

//     // Update the store to reflect the authentication state
//     isAuthenticated.set(isAuthenticatedLocally);

//     if (!isAuthenticatedLocally) {
//       console.log('User not authenticated');
//       // Redirect to the login page or handle unauthenticated user
//       goto('/'); // Adjust the route based on your application structure
//     }
//   } catch (error) {
//     console.error(error);
//     // Handle authentication check failure, redirect to login, etc.
//   }
// };