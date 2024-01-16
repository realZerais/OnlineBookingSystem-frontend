<script>
import LoginForm from "../../components/LoginForm.svelte";
import { goto } from '$app/navigation';
import { isAuthenticated } from '../../hooks/auth'; 
import { onMount } from 'svelte';


const handleAuth = () =>{
    if($isAuthenticated){
        goto('/');
    }
   
}
onMount(() => {
    handleAuth();
  });
</script>

{#if !$isAuthenticated}
    <div class="small flex flex-col justify-start items-center py-5 w-[100%] h-[100vh] bg-main border border-black border-l-[1px]">
        <LoginForm/>
    </div>
{:else} 
    <p>You are already signed in</p>
    <a href="DashboardPage/userDashboardPage/Dashboard/home">Go to Home</a>
{/if}



    
