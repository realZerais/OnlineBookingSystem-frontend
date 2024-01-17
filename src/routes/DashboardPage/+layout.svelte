<script>

import UserNav from "$components/nav/UserNav.svelte"
import AdminNav from "$components/nav/AdminNav.svelte"
import StaffNav from "$components/nav/StaffNav.svelte"
import TechnicianNav from "$components/nav/TechnicianNav.svelte"

let role = 'user';
</script>


<main class="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-10">

  {#if role == 'user'}
    <UserNav></UserNav>
  {:else if role == 'admin'}
    <AdminNav></AdminNav>
  {:else if role == 'staff'}
    <StaffNav></StaffNav>
  {:else if role == 'technician'}
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
