<script></script>

    <div class="flex w-[80%] h-[80vh] relative flex flex-col p-4 text-black gap-y-5" >

        <div class="flex justify-center">
            <img class="w-20 h-20" src="../../public/logo.png" alt=""/>
        </div>

        <div class="text-center text-3xl text-white font-bold">REGISTER</div>

        <div class="overflow-auto w-[100%] px-4">
        <form class="flex flex-col">
            <input placeholder="First Name" class="bg-black text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-neon transition ease-in-out duration-150" type="text">
            <input placeholder="Last Name" class="bg-black text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-neon transition ease-in-out duration-150" type="text">
            <input placeholder="Email" class="bg-black text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-neon transition ease-in-out duration-150" type="email">
            <input placeholder="Confirm Email" class="bg-black text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-neon transition ease-in-out duration-150" type="email">
            <input placeholder="Password" class="bg-black text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-neon transition ease-in-out duration-150" type="password">
            <input placeholder="Confirm Password" class="bg-black text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-neon transition ease-in-out duration-150" type="password">
            <label class="text-sm mb-2 text-neutral-400 cursor-pointer" for="gender">Gender</label>
            <select class="bg-black text-white border border-gray-500 rounded-xl p-2 mb-4 focus:bg-black focus:outline-none focus:ring-1 focus:ring-neon transition ease-in-out duration-150" id="gender">
                <option disabled selected value="">Gender</option>
                <option class="bg-black text-white" value="male">Male</option>
                <option class="bg-black text-white" value="female">Female</option>
                <option class="bg-black text-white" value="other">Other</option>
            </select>
            <label class="text-sm mb-2 text-neutral-400 cursor-pointer" for="birthdate">
                Birthdate
            </label>
            <input class="bg-black text-white border border-gray-500 rounded-xl p-2" placeholder="day/month/year" id="age" type="date">
           
            
            </form>
            
        </div>
        
        
        <a href="/userDashboardPage" type="submit" class="bg-neon w-max m-auto px-6 py-2 rounded text-black font-semibold outline text-sm font-normal">CREATE ACCOUNT</a>
        <div class="flex justify-center items-center text-white py-7">Already have an account?</div>
        
    </div>

    

    <div class=" text-sm text-center mt-[1.6rem] "><a class="text-center text-3xl text-white font-bold" href="/login"><u>SIGN IN</u></a></div>



<style>
    ::-webkit-scrollbar {
  width: 10px;
}

/* Customize the scrollbar thumb (the draggable part) */
::-webkit-scrollbar-thumb {
  background-color: #4DF100; /* Change the color of the thumb */
  border-radius: 5px; /* Rounded corners for the thumb */
}

/* Customize the scrollbar track when the thumb is being dragged */
::-webkit-scrollbar-track-piece{
  background-color: black; /* Change the color of the track */
  border-radius: 5px; 
}
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1); /* Invert the colors to make it white */
}
</style>