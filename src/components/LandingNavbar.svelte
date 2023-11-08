<script>
    import LoginForm from "./LoginForm.svelte";
    import SignUpForm from "./SignUpForm.svelte";

    let isLoginComponentVisible = false;
    let isSignUpComponentVisible = false;

    function toggleLoginComponent() {
        isLoginComponentVisible = !isLoginComponentVisible;
    }

    function toggleSignUpComponent() {
        isSignUpComponentVisible = !isSignUpComponentVisible;
    }

</script>



<nav class="flex justify-between items-center h-[20vh] w-[100%] opacity-90 p-6">
    <ul class="flex justify-start items-center gap-7 text-white">
        <img src="public\logo.png" alt="Company Logo" class="h-20 w-20"/>
        <li><a href="#" class="text-xl font-bold hover:text-green-400">Home</a></li>
        <li><a href="#" class="text-xl font-bold hover:text-green-400">About</a></li>
        <li><a href="#" class="text-xl font-bold hover:text-green-400">Contact</a></li>
    </ul>
    <ul class="flex justify-start items-center gap-7">
        <button on:click={toggleLoginComponent} class="cursor-pointer transition-all bg-buttonColor text-white px-6 py-2 rounded-lg
        border-buttonColorAccent border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" >
        Log In
        </button>
        <button on:click={toggleSignUpComponent} class="cursor-pointer transition-all bg-buttonColor text-white px-6 py-2 rounded-lg
        border-buttonColorAccent marker:border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Sign Up
        </button>
    </ul>
</nav>

{#if isLoginComponentVisible}
<LoginForm/>
{:else if isSignUpComponentVisible}
<SignUpForm/>
{/if}





