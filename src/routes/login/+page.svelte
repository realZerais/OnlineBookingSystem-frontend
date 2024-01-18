<script>
import LoginForm from "../../components/LoginForm.svelte";
import {isAuthenticated} from '../../hooks/auth'; 


</script>

{#if $isAuthenticated}
    <p>You are already signed in <a href="/">Go to Home</a></p>
  
{:else} 
<div class="small flex flex-col justify-start items-center py-5 w-[100%] h-[100vh] bg-main border border-black border-l-[1px]">
    <LoginForm/>
</div>
    
{/if}



    
