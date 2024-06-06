<script>
  import "../app.css";
  import {isAuthenticated, userName, userRole, fetchUser  } from "../hooks/auth";
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation'; 
  import { SvelteToast } from '@zerodevx/svelte-toast'


  onMount(async()=>{
    
    await fetchUser();
    if(!$isAuthenticated){
      goto('/');
    }
  })
</script>

<SvelteToast />

<style>
  :root {
    --toastContainerTop: auto;
    --toastContainerRight: 2rem;
    --toastContainerBottom: 2rem;
    --toastContainerLeft: auto;
    --toastBackground: #014447;
    --toastColor: white;
    --toastBarBackground: #f9bc60;
  }


  
</style>
<slot /> 
