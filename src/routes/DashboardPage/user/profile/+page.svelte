<script>
    import Profile from "$components/Profile.svelte";
    import { goto } from "$app/navigation";

    const goBack = () =>{
        goto("/DashboardPage/user");
    }
</script>  

<div class="flex flex-col w-full justify-start items-start p-4">
    <button on:click={goBack}>Go back</button>
    <Profile/>
</div>



<style>
    

</style>