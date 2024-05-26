import { getCookieValue } from '../hooks/auth'


export const fetchAllBook = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/allBookInfo';

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

export const fetchPendingBook = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/pendingBooks';

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

export const fetchRepairingBook = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/repairingBooks';

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


export const fetchDoneBook = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/doneBooks';

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

export const fetchPendingAppointments = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/pendingAppointment';

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


export const fetchApproveAppointments = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/approvedAppointment';

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
