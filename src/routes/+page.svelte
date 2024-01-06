<script>
    import LandingNavbar from '$components/LandingNavbar.svelte';
    // import About from '$components/About.svelte';
    import Contact from '$components/Contact.svelte';
    import Footer from '$components/Footer.svelte';
    import { onMount } from 'svelte';


</script>

<main class="w-[100%] h-[100vh] parent overflow-x-hidden">

    <section class="s1 grid child h-[100vh]">
        <div class="nav w-[100%] h-[100%]">
            <LandingNavbar/>
        </div>
        

 
        <div class="hero flex flex-col w-[100%] h-[100%] justify-center items-center gap-5 mb-[10%] ">
            <h1 class="w-[100%] h-[70%] text-[77px] font-bold text-mainHeadline tracking-normal ml-[30%] leading-none">Your Device's Journey to Recovery Starts Here.</h1>   
        </div>
            
        <div class="flex justify-center items-start image w-[100%] h-[100%] ">
            <img class=" w-[80%] h-[80%] " src="public\repair-04.png" alt="character repairing">
        </div>
           
            
                
                

    </section>

    <section class="s2 child h-[100vh]">
        
    
    </section>
    
        
    <section class="s3 child h-[100vh] flex">
    

       
    </section>

    <section class="s4 child h-[100vh] flex">
    

       
    </section>
    

</main>
    

<style>
    .parent {
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

    .child {
        scroll-snap-align: center;
    }

    .s1{
        background-image: url('./public/s1.1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 100px 1fr;
        grid-template-areas: 
        "nav nav"
        "hero image";
    }

    .nav{
        grid-area: nav;
    }

    .hero{
        grid-area: hero;
    }

    .image{
        grid-area: image;
    }

     
    .s2{
        background-image: url('./public/s2.1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .s3{
        background-image: url('./public/s1.1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .s4{
        background-image: url('./public/s4.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
   

    
</style>