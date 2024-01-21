import { getCookieValue } from '../hooks/auth'

export const fetchUserData = async () => {
    try {
        const accessToken = getCookieValue('accessToken');


        // if (accessToken == null) {
        //     console.log("no token");
        //     return
        // }
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
        console.log(data);
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
        console.log(data);
        return data;

    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    }
}