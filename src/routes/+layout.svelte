<script>
  import "../app.css";
  import {isAuthenticated, userName, userRole, fetchUser  } from "../hooks/auth";
  import { onMount } from 'svelte';



  onMount(()=>{
    
    fetchUser();
  })

</script>
<!-- {$isAuthenticated}
{$userName}
{$userRole} -->
<slot /> 