<script>
import { goto } from "$app/navigation";
import { onMount } from "svelte";
import LoginForm from "../../components/LoginForm.svelte";
import {isAuthenticated, fetchUser} from '../../hooks/auth'; 
import { toast } from '@zerodevx/svelte-toast'
import {fail} from '../../lib/index'






onMount(async()=>{
    await fetchUser();

    if( $isAuthenticated){
        // console.log($isAuthenticated)
        toast.push('Already Logged In!', {theme: $fail});
        goto('/');
    }
   

})

</script>



<div class="small flex flex-col justify-start items-center py-5 w-[100%] h-[100vh] bg-main border border-black border-l-[1px]">
    <LoginForm/>
</div>


    
