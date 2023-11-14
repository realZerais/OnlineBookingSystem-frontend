<script>
    import LandingNavbar from '../components/LandingNavbar.svelte';
    // import About from '../components/About.svelte';
    import Contact from '../components/Contact.svelte';
    import Footer from '../components/Footer.svelte';


</script>


<div class="main-page bg-lightBG">
    <section class="bg-main">
 
        <LandingNavbar/>
        <hr>

        <div class="h-[100vh] w-[100%] flex flex-row justify-around items-center ">
            <div class="w-[50%] flex flex-col justify-evenly items-center gap-10">
                <h1 class="text-4xl font-bold text-mainHeadline">CORE1 Cellphone and Acessories</h1>
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
        
        
        <div class="custom-shape-divider-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    
       
    
    </section>

    <section class=" h-[100vh] flex flex-col justify-center items-center gap-1 my-20">
    
        <h1 class="text-4xl  text-secondaryParagraph">ABOUT</h1>
        <h1 class="text-2xl  text-secondaryHeadline">Something</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquam beatae modi sit omnis, voluptas quidem ea, asperiores fuga, velit aperiam iure ad eaque? Dicta vel recusandae at perferendis ducimus?</p>

        
    </section>
    
        
    <section class="bg-secondary h-[120vh] w-[100%] flex flex-col justify-evenly items-center gap-10">
    

        <h1 class="text-4xl text-secondaryHeadline">Contact US</h1>
        <h1 class="text-secondaryParagraph">Something</h1>
        <p class="text-secondaryParagraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquam beatae modi sit omnis, voluptas quidem ea, asperiores fuga, velit aperiam iure ad eaque? Dicta vel recusandae at perferendis ducimus?</p>

    </section>
    
        
    
    <section>
        <Footer/>
        <a href="https://www.freepik.com/free-vector/it-yourself-video-blogger-cartoon-icon-with-character-mechanic-computer-screen_17543705.htm#query=web%20character%20repair&position=4&from_view=search&track=ais">Image by macrovector</a> on Freepik
    </section>
</div>
    
       
        
    

    






<style>


.custom-shape-divider-bottom{
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom svg {
    position: relative;
    display: block;
    width: calc(138% + 1.3px);
    height: 118px;
}

.custom-shape-divider-bottom .shape-fill {
    fill: #fffffe;
}


</style>