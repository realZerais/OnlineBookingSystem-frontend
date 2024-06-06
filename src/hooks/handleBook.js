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

export const fetchAllUserBooks = async (usr) => {
    console.log(usr);
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/getAllUserBook/'+usr;

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

export const fetchSearchedBooks = async (book_id) => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = `http://localhost:9000/booking/search/${book_id}`;

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

export const fetchApprovedAppointment = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/getAllApprovedAppointment';

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



export const fetchNonPendingAppointments = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/getAllNonPendingAppointment';

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

export const fetchPendingRepairs = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/getAllPendingRepairs';    

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

        const apiUrl = 'http://localhost:9000/booking/getAllRepairingBooks';

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


export const fetchCompletedBooks = async () => {
    try {
        const accessToken = getCookieValue('accessToken');

        const apiUrl = 'http://localhost:9000/booking/completeBooks';

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


