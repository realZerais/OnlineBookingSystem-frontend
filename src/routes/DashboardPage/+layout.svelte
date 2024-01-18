<script>
import { userRole  } from "../../hooks/auth";
import UserNav from "$components/nav/UserNav.svelte"
import AdminNav from "$components/nav/AdminNav.svelte"
import StaffNav from "$components/nav/StaffNav.svelte"
import TechnicianNav from "$components/nav/TechnicianNav.svelte"



</script>


<main class="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-10">

  {#if $userRole == 'user'}
    <UserNav></UserNav>
  {:else if $userRole == 'admin'}
    <AdminNav></AdminNav>
  {:else if $userRole == 'staff'}
    <StaffNav></StaffNav>
  {:else if $userRole == 'technician'}
    <TechnicianNav></TechnicianNav>
  {/if}

  <slot/>
  
</main>
      
<style>
    main{
    background-color: #004643;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 50px 1fr;
    grid-template-rows:1fr;
  }
  
</style>
