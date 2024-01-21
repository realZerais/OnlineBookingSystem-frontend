<script>
import { userRole  } from "../../hooks/auth";
import UserNav from "$components/nav/UserNav.svelte"
import AdminNav from "$components/nav/AdminNav.svelte"
import StaffNav from "$components/nav/StaffNav.svelte"
import TechnicianNav from "$components/nav/TechnicianNav.svelte"



</script>


<main>

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
  width: 100%;
  grid-template-columns: 50px 1fr;
  grid-template-rows:1fr;
}
  
</style>
