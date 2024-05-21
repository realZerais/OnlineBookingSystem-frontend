<script>
  import "../app.css";
  import {isAuthenticated, userName, userRole, fetchUser  } from "../hooks/auth";
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation'; 

  onMount(()=>{
    
    fetchUser();
    if(!$isAuthenticated){
      goto('/');
    }
  })

</script>

<slot /> 
