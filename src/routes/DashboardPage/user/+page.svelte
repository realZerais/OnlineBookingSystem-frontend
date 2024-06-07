<script>

    import {logout} from "../../../hooks/auth"
    import {userName} from "../../../hooks/auth"
    import {fetchUser} from "../../../hooks/auth"

    import {fetchAllUserBooks} from "../../../hooks/handleBook"
    import {fetchAllBook} from "../../../hooks/handleBook"


    import { writable } from "svelte/store";

    import { onMount } from "svelte";
    import { format } from 'date-fns';
    import { goto } from "$app/navigation";
    

    //COMPONENTS
    import Calendar from "$components/Calendar.svelte";
    import BookCount from "$components/user/BookCount.svelte";
    // import BookLogs from "$components/user/BookLogs.svelte";
    import RecentAppointments from "$components/user/RecentAppointments.svelte";
    import RepairLogs from "../../../components/user/RepairLogs.svelte";
    import UserBooks from "../../../components/user/UserBooks.svelte";


    const scheduleArray = writable([]);

    let books = [];
    let userBooks = [];
    let recentBook = [];


    const gotoProfile = ()=>{
        goto('/DashboardPage/user/profile')
    }

    const loadBooksAndSchedule = async () => {
        // await fetchUser();

        // console.log($userName);

        books = await fetchAllBook();
        userBooks = await fetchAllUserBooks($userName);


        // console.log(userBooks)
    
        scheduleArray.set([]);
        books.forEach(e => {
            let dateString = e.book_date;
            let parsedDate = new Date(dateString);
            const formattedDate = format(parsedDate, 'MMMM d, yyyy');
            scheduleArray.update(arr => [...arr, formattedDate]);
            e.book_date = formattedDate;
        });

        userBooks.forEach(e => {
            let dateString = e.book_date;
            let parsedDate = new Date(dateString);
            const formattedDate = format(parsedDate, 'MMMM d, yyyy');
            e.book_date = formattedDate;

            // if(e.appointment_status == 'pending' ){
            //     recentBook = e;
            // }else{
            //     recentBook = [];
            // }
        });

        // console.log(userBooks);

        recentBook = userBooks[0];

        console.log(userBooks.length)
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


      
        


        <!-- Recent Appointments and Notice Section -->
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

            
            <div class="flex flex-col justify-start items-start p-4 gap-8 border-main border-2 rounded-lg shadow-lg h-[50%]">
                            
                <h2 class="text-2xl font-bold">Recent Appointment</h2>

                {#if !recentBook}
                    <div>no recent books</div>
                {:else}
                    <RecentAppointments
                        book_date = {recentBook.book_date}
                        issue_description = {recentBook.issue_description}
                        remark = {recentBook.remark}
                        appointment_status = {recentBook.appointment_status}
                    />
                {/if}
               
                
            </div>

         

            
        </section>

        <!-- Book Count and Repair Logs Section -->
        <section class="col-span-1 lg:col-span-1 flex flex-col justify-between gap-2">
            <BookCount
                bookCount = {userBooks.length}
            />
            <RepairLogs/>
        </section>


        
        <section class="col-span-1 lg:col-span-1 flex flex-col gap-2">

        </section>

        <section class="col-span-1 lg:col-span-3 flex flex-col gap-2">
            <div class="flex flex-col justify-center items-start w-[100%] mt-2">
                <div class="font-mono font-semibold text-slate-700 text-xl">Book Logs</div>
            </div>
            {#each userBooks as userBook}
                <UserBooks
                    book_date = {userBook.book_date}
                    book_id = {userBook.book_id}
                    cellphone_model = {userBook.cellphone_model}
                    issue_description = {userBook.issue_description}
                    appointment_status = {userBook.appointment_status}
                    repair_status = {userBook.repair_status}
                />
            {/each}
        </section>
        <!-- Booking Records Section -->
       
        

    </div>

</div>