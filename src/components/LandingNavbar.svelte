<script>
    let isLoginComponentVisible = false;
    let isSignUpComponentVisible = false;

    function toggleLoginComponent() {
        isLoginComponentVisible = !isLoginComponentVisible;
    }

    function toggleSignUpComponent() {
        isSignUpComponentVisible = !isSignUpComponentVisible;
    }

</script>



<nav class=" bg-main flex justify-between items-center h-[120px] w-[100%] opacity-90 p-6">
    <img src="public\logo-white.png" alt="Company Logo" class="h-20 w-20"/>
    <ul class="flex justify-start items-center gap-4 text-mainParagraph ">
        
        <li class="cursor-pointer transition-all hover:text-secondaryParagraph hover:bg-accent px-6 py-2 rounded-lg"><a href="#" class="text-lg font-bold hover:brightness-100">Home</a></li>
        <li class="cursor-pointer transition-all hover:text-secondaryParagraph hover:bg-accent px-6 py-2 rounded-lg"><a href="#" class="text-lg font-bold hover:brightness-100">About</a></li>
        <li class="cursor-pointer transition-all hover:text-secondaryParagraph hover:bg-accent px-6 py-2 rounded-lg"><a href="#" class="text-lg font-bold hover:brightness-100">Contact</a></li>
        <a href="/login" on:click={toggleLoginComponent} class="cursor-pointer transition-all bg-accent text-accentParagrah text-lg font-bold px-6 py-2 rounded-lg
        border-secondary border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" >
        Book Now!
        </a>
    </ul>

    
</nav>






