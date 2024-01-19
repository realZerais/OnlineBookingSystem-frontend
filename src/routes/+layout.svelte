<script>
  import "../app.css";
  import {isAuthenticated, userName, userRole, fetchUser  } from "../hooks/auth";
  import {fetchData} from "../hooks/handleUser"
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation'; 





  onMount(()=>{
    
    fetchUser();
    if(!$isAuthenticated){
      goto('/');
    }
  })

</script>
<button on:click={fetchData}>call</button>

{#await fetchData()}
	<p>...waiting</p>
{:then data}
  
  <p>{data.username}</p>
  
{:catch error}
	<p>An error occurred!</p>
{/await}



<!-- {$isAuthenticated}
{$userName}
{$userRole} -->
<slot /> 