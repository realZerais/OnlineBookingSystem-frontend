<script>
    import LandingNavbar from '$components/LandingNavbar.svelte';
    // import About from '$components/About.svelte';
    import Contact from '$components/Contact.svelte';
    import Footer from '$components/Footer.svelte';
    import { onMount } from 'svelte';


</script>

<main class="w-[100%] h-[100vh] parent ">

    <section class="child bg-main h-[100vh] ">
        <LandingNavbar/>

                
        <div class="h-[100vh] w-[100%] flex flex-row justify-around items-center ">
            <div class="w-[50%] flex flex-col justify-evenly items-center gap-5 mb-[10%] ">
                <h1 class="w-[100%] text-[77px] font-bold text-mainHeadline tracking-normal ml-[20%]">CORE1 Cellphone and Acessories</h1>
                <p class="text-xl  text-mainParagraph">Some Details Here</p>
                
                <div class="flex flex-row gap-6" >
                    <button class= "inline-flex text-accentParagrah h-12 bg-accent shadow-base shadow-secondary border-secondary border-y-2 py-2 px-6 focus:outline-none 
                    rounded-3xl text:base md:text-lg hover:brightness-110 ">asdsadasds</button>
                    
                    <button class="w-fit p-2 h-12 px-4 cursor-pointer border rounded-full border-white
                    hover:bg-blue-50 hover:bg-opacity-20 text-mainHeadline">MOasdsadRE</button>
                </div>
               
            </div>
            
            <div class="w-[50%]">
                <img src="public\repair-01.png" alt="character repairing">
            </div>
            
        </div>
           
                
                

    </section>

    <section class="child bg-lightBG h-[100vh]">
        
    
        <!-- <h1 class="text-4xl  text-secondaryParagraph">ABOUT</h1>
        <h1 class="text-2xl  text-secondaryHeadline">Something</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquam beatae modi sit omnis, voluptas quidem ea, asperiores fuga, velit aperiam iure ad eaque? Dicta vel recusandae at perferendis ducimus?</p>

         -->
    </section>
    
        
    <section class="child bg-secondary h-[100vh] flex">
    

        <!-- <h1 class="text-4xl text-secondaryHeadline">Contact US</h1>
        <h1 class="text-secondaryParagraph">Something</h1>
        <p class="text-secondaryParagraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquam beatae modi sit omnis, voluptas quidem ea, asperiores fuga, velit aperiam iure ad eaque? Dicta vel recusandae at perferendis ducimus?</p> -->

        <div class="w-[100%] h-[10%] bg-lightBG justify-self-center self-end text-center">FOOTER</div>
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
</style>