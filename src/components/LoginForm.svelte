<script></script>

    <div class="w-[80%] h-[80vh] relative flex flex-col p-4 text-black  gap-y-5" >
        <div class="flex justify-center">
            <img class="w-20 h-20" src="../../public/logo.png" alt=""/>
        </div>

        <div class="text-center text-3xl text-white font-bold">LOGIN</div>

        <form class="flex flex-col gap-3 mt-10">
            <div class="block relative"> 
                <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"></label>
                <input type="text" id="email" placeholder="EMAIL" class="rounded-xl border-2 bg-black text-center border-gray-500 text-sm w-full font-normal leading-[18px] text-white tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-neon outline-0">
                
            </div>
            <div class="block relative"> 
                <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"></label>
                <input type="password" id="password" placeholder="PASSWORD" class="rounded-xl border-2 bg-black text-center border-gray-500 text-sm w-full font-normal leading-[18px] text-white tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-neon outline-0">
                
            </div>
            <div>
                <!-- <a class="text-sm text-[#7747ff]" href="/adminDashboardPage">Forgot your password?</a> -->
            </div>
            <a href="/userDashboardPage" type="submit" class="bg-neon w-max m-auto px-6 py-2 rounded text-black font-semibold outline text-sm  hover:bg-neonHover">Log In</a>
    
        </form>

        
        <div class="flex justify-center items-center text-white py-7">or</div>
        
    </div>

    

    <div class=" text-sm text-center mt-[1.6rem] "><a class="text-center text-3xl text-white font-bold hover:text-neon" href="/register"><u>SIGN UP</u></a></div>



<style></style>