<script>

    import {logout} from "../../../hooks/auth"
    import {userName} from "../../../hooks/auth"

    import {fetchAllUserBooks} from "../../../hooks/handleBook"

    import { onMount } from "svelte";
    import { format } from 'date-fns';
    import { goto } from "$app/navigation";
    

    //COMPONENTS
    import Calendar from "$components/Calendar.svelte";
    import BookCount from "$components/user/BookCount.svelte";
    import BookLogs from "$components/user/BookLogs.svelte";
    import { writable } from "svelte/store";
    import OngoingRepairs from "$components/user/OngoingRepairs.svelte";


    const scheduleArray = writable([]);

    let books = [];

    const gotoProfile = ()=>{
        goto('/DashboardPage/user/profile')
    }
    const loadBooksAndSchedule = async () => {
        
        console.log("called");
        books = await fetchAllUserBooks(userName);
        scheduleArray.set([]);
        books.forEach(e => {
            let dateString = e.book_date;
            let parsedDate = new Date(dateString);
            const formattedDate = format(parsedDate, 'MMMM d, yyyy');
            scheduleArray.update(arr => [...arr, formattedDate]);
        });
    };

    onMount(loadBooksAndSchedule);

</script>

<div class="p-4 w-full flex flex-col justify-start  gap-4">
    <header class="flex justify-between items-center border-main border-2 rounded-md  p-4 shadow-lg w-[100%]">
        <h1 class="text-xl font-bold text-main">CORE1</h1>
        <div class="flex gap-4"> 
            <button on:click={gotoProfile} class="text-main">Profile</button>
            <button on:click={logout} class="text-red-700">Logout</button>
        </div>
        
    </header>

    <div class="flex flex-col justify-center items-start w-[100%]">
        <div class="font-mono font-semibold text-slate-700">Welcome {$userName}!</div>
    </div>
    

    <!--MAIN CONTENT-->
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">

        <!--Calendar Section col-span-2-->


        <Calendar 
        scheduleArray = {$scheduleArray}
        loadBooksAndSchedule = {loadBooksAndSchedule}/>


      
        


        <!-- Ongoing Repairs and Notice Section -->
        <section class="col-span-1 lg:col-span-2 bg-white gap-2 flex flex-col justify-between">
            <div class="flex flex-col justify-start items-start p-4 border-slate-800 bg-accent border-2 rounded-lg shadow-lg">
                
                <h2 class="text-2xl font-bold text-red-700">NOTICE !</h2>
                <div class="mt-4">
                    <h2 class="text-3xl font-bold text-black">8:00 AM - 12:00 PM</h2>
                    <p class="text-black">STAGING OF REPAIRS WILL ONLY BE CATERED ON THIS TIME </p>
                </div>

                <div class="mt-4">
                    <h2 class="text-3xl font-bold text-black">1:00 PM - 5:00 PM</h2>
                    <p class="text-black">STAGING OF REPAIRS FOR WALK-INS WILL ONLY BE CATERED ON THIS TIME </p>
                </div>
                
            </div>

            <OngoingRepairs/>

            
        </section>

        <!-- Book Count Section -->
        <section class="col-span-1 lg:col-span-1 flex flex-col justify-between gap-2">
            <BookCount/>
            <div class="bg-white p-4 shadow-md h-[70%] border-2 border-main rounded-md">
                <div class="flex items-center">
                
                    <h2 class="text-lg font-bold">USER</h2>
                    
                </div>
                <div class="mt-4">
                    <h2 class="text-3xl font-bold">9:00 AM</h2>
                    <p class="text-gray-500">ONGOING OR RECENT BOOK</p>
                </div>
            </div>
        </section>

        <!-- Profile Section -->
        <!-- <section class="col-span-1 lg:col-span-2 bg-white p-4 shadow-md h-[50%]">
            <div class="flex items-center">
                
                <h2 class="text-lg font-bold">USER</h2>
                
            </div>
            <div class="mt-4">
                <h2 class="text-3xl font-bold">9:00 AM</h2>
                <p class="text-gray-500">ONGOING OR RECENT BOOK</p>
            </div>
        </section> -->

        

        <section class="col-span-1 lg:col-span-5 ">
            <BookLogs/>
        </section>
        <!-- Booking Records Section -->
        <!-- <section class="col-span-2 bg-white p-4 shadow-md">
            <h2 class="text-xl font-bold mb-4">Book Records</h2>
            <div class="overflow-x-auto">
                <table class="w-full table-auto border-collapse">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="border p-2">Book ID</th>
                            <th class="border p-2">Date</th>
                            <th class="border p-2">Issue</th>
                            <th class="border p-2">Status</th>
                            <th class="border p-2">Search</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </section> -->
        

        

        

        <!-- Sidebar Section -->
        <!-- <aside class="bg-white p-4 shadow-md">
            <h2 class="text-xl font-bold mb-4">Suggested Dates</h2>
            <div class="space-y-2">
                <div class="p-2 bg-gray-100 border">Date 1</div>
                <div class="p-2 bg-gray-100 border">Date 2</div>
                <div class="p-2 bg-gray-100 border">Date 3</div>
            </div>
        </aside> -->
    </div>
</div>