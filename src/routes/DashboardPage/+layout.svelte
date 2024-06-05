<script>
import { userRole  } from "../../hooks/auth";
import UserNav from "$components/nav/UserNav.svelte"
import AdminNav from "$components/nav/AdminNav.svelte"
import StaffNav from "$components/nav/StaffNav.svelte"
import TechnicianNav from "$components/nav/TechnicianNav.svelte"




</script>


<main class="w-[100%] bg-slate100 flex">

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
      