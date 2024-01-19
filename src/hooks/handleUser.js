import { getCookieValue } from '../hooks/auth'

export const fetchData = async () => {
    try {
        // Assume you have a cookie named "accessToken"
        const accessToken = getCookieValue('accessToken');
        // const accessToken = getCookie('accessToken');
        // const accessToken = getCookie('accessToken');

        if (accessToken == null) {
            console.log("no token");
            return
        }
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
            const { message } = errorData;
            console.log(message);
            alert(message);
            // throw new Error('Network response was not ok');
        }

        // Handle the data

        return await response.json();

    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    }
}