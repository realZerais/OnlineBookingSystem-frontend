<script>
    import Calendar from "$components/Calendar.svelte";
</script>

<div class="body">

    <div class="header flex flex-col self-start rounded-3xl w-[100%] h-[100%] p-8 pb-14 justify-center gap-y-5 ">
        <strong class="text-6xl text-mainParagraph tracking-widest ml-[9%]">BOOKING</strong>
        <hr class="border-t-2 border-accent w-6/12 ml-[9%]"> 
    </div>

    <div class="content flex justify-center items-center row-span-2 w-[100%]">
        <div class="flex justify-center  items-center w-[80%] h-[90%] bg-mainParagraph  border-black border-2 shadow-leftbottom ml-[3%] p-3 gap-x-5">
               <Calendar/>
               <div class="flex w-[40%] flex-col gap-y-4">
                <div class="bg-accent text-center text-[20px] font-bold border border-[2px] border-black p-5"><p>Click on the desired date in the calendar to make your booking.</p></div>
                <div class="bg-red-400 text-center text-[13px] font-bold border border-[2px] border-black p-3"><p>🚨 Please note that online repair bookings are exclusively available for morning slots. Afternoons are reserved for walk-ins. Thank you for your cooperation! 🔧</p></div>
                
                <div class="flex items-center gap-x-5"><div class=" w-[50px] h-[20px] bg-red-500 border border-black"></div>TAKEN</div>
                <div class="flex items-center gap-x-5"><div class=" w-[50px] h-[20px] bg-white border border-black"></div>AVAILABLE</div>
                <div class="flex items-center gap-x-5"><div class=" w-[50px] h-[20px] bg-blue-600 border border-black"></div>CURRENT DATE</div>
               </div>
        </div>
    </div>

</div>


<style>

    .body{
        display: grid;
        background-color: #004647;
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 120px 1fr;
    }

    .header{
        visibility: hidden;
        margin-left: -20%;
        animation: to-right .3s linear forwards;
    }



    @keyframes to-right {
       0% {
         visibility: hidden; /* Start with opacity 0 */
       }
       100% {
         visibility: visible;
         margin-left: 0%;
       }
     }


</style>    