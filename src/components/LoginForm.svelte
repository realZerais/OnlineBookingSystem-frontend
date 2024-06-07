<script>
    import { goto } from '$app/navigation';
    import { fetchUser, isAuthenticated} from '../hooks/auth';
    import { toast } from '@zerodevx/svelte-toast'
    import {fail} from '../lib/index'

    let username = '';
    let password = '';
  
  const handleSubmit = async () =>{

    const loginData = JSON.stringify({ 
        username,
        password,
    });



    try {   
        const response = await fetch('http://localhost:9000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: loginData,
        }); 

        if (!response.ok) {
            const errorData = await response.json();
            const {message} = errorData;
        
            toast.push(message, {theme: $fail});
        }else{
            const { accessToken, username, role } = await response.json();

            document.cookie = `accessToken=${accessToken}; path=/`; //put the accessToken to the cookie
            document.cookie = `username=${username}; path=/`; //put the username to the cookie
            document.cookie = `role=${role}; path=/`; //put the role to the cookie

            await fetchUser();
            if(role == 'user'){
                goto(`/DashboardPage/user`);
            }else{
                goto(`/DashboardPage/${role}/dashboard`);
            }
            
            toast.push('Logged in successfully!');
        }
        
    } catch (error) {
        console.error('Error:', error);
        toast.push(error.message, {theme: $fail});
    }



    }


</script>

<div class="flex w-screen md:w-[80%] md:h-screen relative flex-col p-4 text-black gap-y-1  md:gap-y-4 pt-0"  >
    <a href="/"><svg class="w-7 h-7 md:absolute top-[-3%] left-[-10%] fill-mainParagraph hover:fill-accent" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
    </svg>
    </a>

    <div class="flex justify-center">
        <img class="w-14 h-14" src="../../public/logo-white.png" alt=""/>
    </div>

    <div class="text-center text-2xl text-mainParagraph font-bold">LOGIN</div>

    <form class="flex flex-col gap-3 mt-10">
        <div class="block relative"> 
            <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"></label>
            <input bind:value={username} required type="text" id="email" placeholder="Username" class="rounded-xl border-2 bg-black text-center border-gray-500 text-sm w-full font-normal leading-[18px] text-white tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-accent outline-0">
            
        </div>
        <div class="block relative"> 
            <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"></label>
            <input bind:value={password} required type="password" id="password" placeholder="Password" class="rounded-xl border-2 bg-black text-center border-gray-500 text-sm w-full font-normal leading-[18px] text-white tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-accent outline-0">
            
        </div>
        <div>
            <!-- <a class="text-sm text-[#7747ff]" href="/adminDashboardPage">Forgot your password?</a> -->
        </div>
        <button on:click={handleSubmit} class="bg-accent w-max m-auto px-6 py-2 rounded text-main outline text-sm font-normal border-secondary border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">LOGIN</button>
        

    </form>

    
    <div class="flex md:absolute justify-center items-center text-white bottom-0 left-[47%] mt-20">or</div>

    
    
</div>



<div class=" text-sm text-center mt-[1.6rem] "><a class="text-center text-3xl text-accent font-bold hover:brightness-110" href="/login/register">SIGN UP</a></div>



<style></style>