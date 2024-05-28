import { getCookieValue } from '../hooks/auth'
import { writable } from 'svelte/store';

export const userStore = writable('');

export const fetchUserData = async () => {
    try {
        const accessToken = getCookieValue('accessToken');
        const apiUrl = 'http://localhost:9000/user/info';

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },

        });

        if (!response.ok) {
            const errorData = await response.json();
            const { error } = errorData;
            console.log(error);
            alert(error);
            // throw new Error('Network response was not ok'); 
        }

        // Handle the data
        const data = await response.json();
        return data;

    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    }
}

export const fetchAllUser = async () => {
    try {
        const accessToken = getCookieValue('accessToken');


        const apiUrl = 'http://localhost:9000/user/allUserInfo';

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },

        });

        if (!response.ok) {
            const errorData = await response.json();
            const { error } = errorData;
            console.log(error);
            alert(error);
            // throw new Error('Network response was not ok');
        }

        // Handle the data
        const data = await response.json();
        return data;

    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    }
}

export const fetchUserBooks = async (user_id) => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = `http://localhost:9000/user/userBooks/${user_id}`;

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },

        });

        if (!response.ok) {
            const errorData = await response.json();
            const { error } = errorData;
            console.log(error);
            alert(error);
            // throw new Error('Network response was not ok');
        }

        // Handle the data
        const data = await response.json();
        return data;

    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    }
}

export const fetchSearchedUsers = async (username) => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = `http://localhost:9000/user/search/${username}`;

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },

        });

        if (!response.ok) {
            const errorData = await response.json();
            const { error } = errorData;
            console.log(error);
            alert(error);
            // throw new Error('Network response was not ok');
        }

        // Handle the data
        const data = await response.json();
        return data;

    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    }
}
