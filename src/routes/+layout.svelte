<script>
  import "../app.css";
  import {isAuthenticated} from "../hooks/auth";
  import { onMount } from 'svelte';


  onMount(()=>{
    
    isAuthenticated.set(document.cookie.includes('accessToken'));//check if there's an access token on every page load
  })

</script>
{$isAuthenticated}
<slot /> 