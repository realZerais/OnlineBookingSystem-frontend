<script>
import { isAuthenticated } from "../hooks/auth"
import { userRole  } from "../hooks/auth";


</script>



<nav class=" bg-main flex justify-between items-center h-[75px]  w-[100%] opacity-[.98] p-6 fixed z-10">
    <div class="flex justify-center items-center md:gap-x-[20px] gap-x-[10px] font-bakbak text-4xl text-mainParagraph ">
        <img src="public\logo-white.png" alt="Company Logo" class=" md:h-14 h-10 "/>
        <h1 class="md:text-4xl text-2xl">CORE1</h1>
        </div>


    <ul class="flex justify-start items-center gap-4 text-mainParagraph">
        
        <li onclick="window.location.href='#s1'" class="hidden md:block cursor-pointer transition-all hover:text-secondaryParagraph hover:bg-accent px-6 py-2 rounded-lg"><a  href="#" class=" text-xl font-bold hover:brightness-100">Home</a></li>
        <li onclick="window.location.href='#s2'" class="hidden md:block cursor-pointer transition-all hover:text-secondaryParagraph hover:bg-accent px-6 py-2 rounded-lg"><a  href="#" class=" text-xl font-bold hover:brightness-100">About</a></li>
        <li onclick="window.location.href='#s4'" class="hidden md:block cursor-pointer transition-all hover:text-secondaryParagraph hover:bg-accent px-6 py-2 rounded-lg"><a  href="#" class=" text-xl font-bold hover:brightness-100">Contacts</a></li>

        
        {#if !$isAuthenticated}
            <a href="/login" class="cursor-pointer transition-all bg-accent text-accentParagrah md:text-lg text-base font-bold px-6 py-2 rounded-lg border-secondary border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" >
                Log in
            </a>
            {:else}

            
           
            <a href="/DashboardPage/{$userRole}/dashboard" class="cursor-pointer transition-all bg-accent text-accentParagrah text-lg font-bold px-6 py-2 rounded-lg border-secondary border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" >
                Go To Dashboard
            </a>
        {/if}

        
    </ul>

    
</nav>


<style>


    
    
</style>



