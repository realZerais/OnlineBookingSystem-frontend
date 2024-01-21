<script>

    import { onMount } from 'svelte';
    import {fetchUserData} from "../hooks/handleUser"
    import { getCookieValue } from '../hooks/auth'

    

    onMount( async () => {
        // Function to generate the calendar for a specific month and year
        // Function to generate the calendar for a specific month and year
        function generateCalendar(year, month) {
            const calendarElement = document.getElementById('calendar');
            const currentMonthElement = document.getElementById('currentMonth');
            
            // Create a date object for the first day of the specified month
            const firstDayOfMonth = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            
            // Clear the calendar
            calendarElement.innerHTML = '';

            // Set the current month text
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            currentMonthElement.innerText = `${monthNames[month]} ${year}`;
            
            // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
            const firstDayOfWeek = firstDayOfMonth.getDay();

            // Create headers for the days of the week
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            daysOfWeek.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'text-center font-semibold';
                dayElement.innerText = day;
                calendarElement.appendChild(dayElement);
            });

            // Create empty boxes for days before the first day of the month
            for (let i = 0; i < firstDayOfWeek; i++) {
                const emptyDayElement = document.createElement('div');
                calendarElement.appendChild(emptyDayElement);
            }

            // Create boxes for each day of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'hover:bg-stone-200 text-center py-2 border cursor-pointer';
                dayElement.innerText = day;

                // Check if this date is the current date
                const currentDate = new Date();
                if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
                    dayElement.classList.add('bg-blue-500', 'text-white', 'pointer-events-none'); // Add classes for the indicator
                arrowBack.classList.add('hidden');

                }
                else if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day <= currentDate.getDate()) {
                    dayElement.classList.add('opacity-30', 'pointer-events-none');
                };

                if(month != currentDate.getMonth() && year != currentDate.getFullYear()){
                    arrowBack.classList.remove('hidden');
                }

                calendarElement.appendChild(dayElement);
            }
        }

        // Initialize the calendar with the current month and year
        const currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();
        generateCalendar(currentYear, currentMonth);

        // Event listeners for previous and next month buttons
        document.getElementById('prevMonth').addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            generateCalendar(currentYear, currentMonth);
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            generateCalendar(currentYear, currentMonth);
        });

        // Function to show the modal with the selected date
        function showModal(selectedDate) {
            const modal = document.getElementById('myModal');
            const modalDateElement = document.getElementById('modalDate');
            modalDateElement.innerText = selectedDate;
            modal.classList.remove('hidden');
            date = selectedDate;
        }

        // Function to hide the modal
        function hideModal() {
            const modal = document.getElementById('myModal');
            modal.classList.add('hidden');
        }



        // Event listener for date click events
        const calendarElement = document.getElementById('calendar');
        calendarElement.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('cursor-pointer')) {
            const day = parseInt(target.innerText);
            const selectedDate = new Date(currentYear, currentMonth, day);
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = selectedDate.toLocaleDateString(undefined, options);
            showModal(formattedDate);
        }
        });



        // Event listener for closing the modal
        document.getElementById('closeModal').addEventListener('click', () => {
            hideModal();
        });

        document.getElementById('submitData').addEventListener('click', () => {
            hideModal();
        });

        
        data = await fetchUserData();
        name = data.username;
        email = data.email;
        phone = data.phone_number;
        id = data.user_id
        
        console.log(data);
    });

    
   //end of onmount

   let data = '';
    
    
    let name = '';
    let email = '';
    let phone = '';
    let id = '';

    let brand = '';
    let model = '';
    let issue = '';
    let date = '';


    const handleSubmit = async () =>{

        const accessToken = getCookieValue('accessToken');
        const apiUrl = 'http://localhost:9000/booking/addBook';

        const bookingData = JSON.stringify({
            id,
            date,
            brand,
            model,
            issue,
        });

        console.log(bookingData);

        try {   
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: bookingData,
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
            console.log('Server Response:', data);
            
        } catch (error) {
            console.error('Error:', error);
        }

        

    }

    
       


</script>

<div class=" flex items-center justify-center w-[100%] h-[100%] p-1">
    <div class="w-[100%] bg-white shadow-lg rounded-lg overflow-hidden border border-black">
        <div class="flex items-center justify-between px-6 py-3 bg-gray-700">
            <button id="prevMonth" class="text-white fill-white"><svg id="arrowBack" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
            <h2 id="currentMonth" class="text-white  font-bakbak"></h2>
            <button id="nextMonth" class="text-white fill-white"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
        </div>
        <div class="grid grid-cols-7 gap-2 p-4" id="calendar">
            <!-- Calendar Days Go Here -->
        </div>
        <div id="myModal" class="modal hidden fixed inset-0 flex items-center justify-center z-50">
          <div class="modal-overlay absolute inset-0 bg-black opacity-90"></div>
        
          <div class="flex flex-col modal-container bg-white w-[70%] h-[80%] rounded-[10px] shadow-lg z-50 overflow-y-auto pb-5">

            <div class="flex flex-col modal-content w[100%] h-[100%] gap-y-2">

              <div class="flex flex-col relative items-center justify-center w-[100%] p-5 ">
                <p class="self-center text-2xl font-bold justiy-self-center ">Selected Date</p>
                <button id="closeModal" class="absolute top-5 right-5 modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring justify-self-end">✕</button>
                <div id="modalDate" class="flex justify-center   w-[100%] text-xl font-semibold self-center"></div>
            </div>

             
              
              <div class="flex w-[100%] h-[80%] p-5 divide-x">

                <div class="flex flex-col w-[50%] h-[100%] ">
                    <h2 class="flex  justify-center font-bakbak">
                        CLIENT DETAILS
                    </h2>
                    
                    <div class="flex flex-col w-[100%] h-[100%] pl-[50px] pt-[20px] gap-y-5">
                        <h1 class="flex items-center justify-self-start gap-x-[50px]"> 
                            <label for="name">Name:</label>
                            <input name="name" type="text" bind:value={name} class="bg-zinc-200 rounded-[5px] p-2" placeholder="Enter name"/>
                        </h1>
                        <h1 class="flex items-center justify-self-start gap-x-[53px]"> 
                            <label for="email">Email:</label>
                            <input name="email" type="text" bind:value={email} class="bg-zinc-200 rounded-[5px] p-2" placeholder="Enter email"/>
                        </h1>
                        <h1 class="flex items-center justify-self-start gap-x-[45px]"> 
                            <label for="phone">Phone:</label>
                            <input name="phone" type="text" bind:value={phone} class="bg-zinc-200 rounded-[5px] p-2" placeholder="Enter contact number"/>
                        </h1>
                    </div>
                </div>
        
                <div class="flex flex-col items-center w-[50%] h-[100%] ">
                    <h2 class="flex  justify-center font-bakbak">
                        DEVICE DETAILS
                    </h2>
                     
                    <div class="flex flex-col w-[100%] h-[100%] pl-[65px] pt-[20px] gap-y-5 ">
                        <h1 class="flex items-center justify-self-start gap-x-[40px]"> 
                            <label for="brand">Brand:</label>
                            <input name="brand" type="text" bind:value={brand} class="bg-zinc-200 rounded-[5px] p-2" placeholder="Enter brand"/>
                        </h1>
                        <h1 class="flex items-center justify-self-start gap-x-[35px]"> 
                            <label for="model">Model:</label>
                            <input name="model" type="text" bind:value={model} class="bg-zinc-200 rounded-[5px] p-2" placeholder="Enter model"/>
                        </h1>
                        <h1 class="flex items-center justify-self-start gap-x-[45px]"> 
                            <label for="issue">Issue:</label>
                            <input name="issue" type="text" bind:value={issue} class="bg-zinc-200 rounded-[5px] p-2" placeholder="Enter issue"/>
                        </h1>
                        
                    </div>
                </div>

                
                
            </div>
            <button id="submitData" on:click={handleSubmit} class="flex self-center items-center justify-center font-bakbak items-center bg-accent p-3 w-[15%] h-[15%] rounded-3xl text-[20px]">BOOK</button>
            </div>
          </div>
        </div>
    </div>
</div>


<style>
    .disabled-day {
      background-color: black;
      color: black;
      pointer-events: none; /* Disable pointer events */
      cursor: not-allowed;
    }
</style>