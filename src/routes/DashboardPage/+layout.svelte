<script>
    import {isAuthenticated, userName, userRole, fetchUser  } from "../../hooks/auth";
    import AdminNav from "$components/nav/AdminNav.svelte"
    import StaffNav from "$components/nav/StaffNav.svelte"
    import TechnicianNav from "$components/nav/TechnicianNav.svelte"
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation'; 
    import { toast } from '@zerodevx/svelte-toast'
    import {fail} from '../../lib/index'
    






    onMount(async()=>{
        // await fetchUser();
        if(!$isAuthenticated){
            toast.push('Authorization Error!', {theme: $fail});
            goto('/login');
        }
    })
</script>

<main class="flex w-full">
    {#if $userRole == 'admin'}
    <AdminNav></AdminNav>
    {:else if $userRole == 'staff'}
    <StaffNav></StaffNav>
    {:else if $userRole == 'technician'}
    <TechnicianNav></TechnicianNav>
    {/if}
    <slot/>

</main>
