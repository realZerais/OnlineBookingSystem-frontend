<script>
    import LandingNavbar from '$components/LandingNavbar.svelte';
    // import About from '$components/About.svelte';
    import Contact from '$components/Contact.svelte';
    import Footer from '$components/Footer.svelte';
    import { onMount } from 'svelte';

    


</script>

<main class="w-[100%] h-[100vh] parent overflow-x-hidden">
    
    <section id="s1" class="s1 grid child h-[100vh]">
        <div class="nav w-[100%] h-[100%]">
            <LandingNavbar/>
        </div>
 
        <div class="hero relative flex flex-col w-[100%] h-[100%] justify-center items-center mb-[10%] ml-[15%] leading-none">
            <div class="flex flex-col justify-end w-[100%] h-[70%] text-[3.8rem] font-bold text-mainHeadline tracking-normal leading-none pb-5">      
                <p>Your Device's</p>
                <p>Journey to Recovery</p>
                <p>Starts Here.</p>
            </div>  
            <p class="w-[80%]  h-[80%]  text-[1rem] text-mainHeadline  me-[20%] leading-snug">Explore cutting-edge solutions and personalized care plans tailored to guide your device on the path to recovery. From diagnostics to rehabilitation, we're here to support every step of your device's journey.</p> 
            
            <a href="/login/register" class="absolute bottom-[20%] left-[0] me[10%] cursor-pointer  bg-accent text-accentParagrah text-2xl font-bold p-5 rounded-lg hover:brightness-110 active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" >
                Book Now
            </a>
        </div>
            
        <div class="flex justify-center items-center image w-[100%] h-[100%] ">
            <img class=" w-[65%] mb-[8%]" src="public\repair-04.png" alt="character repairing">
        </div>
 
    </section>

    <section id="s2" class="s2 flex justify-center items-center  child h-[100vh] p-12">

        <div class="flex justify-center pt-[13%] pr-[5%]">
            <img class="w-[90%]" alt="" src="./public/about.png" />
        </div>

        <div class="flex welcome flex-col items-start w-[100%] h-[100%] gap-y-5 justify-center">
            <p class="text-accent self-start text-5xl font-bold mb-[3%]">Welcome To Our Website</p>
            <p class="text-white text-xl mb-[5%]">At CORE1, we lead your devices on a transformative journey with a commitment to innovation and personalized care. Standing at the forefront of technology wellness, our seasoned professionals leverage cutting-edge solutions to restore optimal functionality and guide your devices toward flourishing in their continued use. Our personalized care philosophy sets us apart, redefining device recovery for an elevated technology experience.</p>
            <button onclick="window.location.href='#s3'" class="text-xl font-bold p-3 hover:brightness-110  cursor-pointer transition-all bg-accent text-accentParagrah rounded-lg">Learn More</button>
        </div>

    </section>
    
        
    <section id="s3" class="s3 flex items-center  child h-[100vh]">
    
        <div class="w-[100%] head flex justify-center">
            <p class="text-white justify items-center text-5xl font-bold">Why Choose CORE1?</p>
        </div>

        <div class="flex justify-between w-[100%] h-[100%] gap-x-7 p-5 pb-14">
            
            <div class="flex flex-col justify-center items-center w-[80%] h-[90%] border  border-accent rounded-xl p-5">

                <div class="w-[70%] bg-red-400 rounded-full ">
                    <img alt="" src="./public/expertise.png"/>
                </div>
                <p class="text-xl text-accent front-bakbak font-bold mb-[15%]">EXPERTISE</p>
                <p class="text-center text-lg text-white">Our team comprises seasoned professionals passionate about technology.</p> 
                
            </div>

            <div class="flex bg-accent flex-col justify-center items-center w-[80%] h-[90%] border border-accent rounded-xl p-5">
                
                <div class="w-[70%] bg-blue-400 rounded-full ">
                    <img class="w-[100%]" alt="" src="./public/innovation.png"/>
                </div>
                <p class="text-xl text-main front-bakbak font-bold mb-[15%]">INNOVATION</p>
                <p class="text-center text-lg text-black">Stay ahead with state-of-the-art diagnostics and cutting-edge rehabilitation.</p>
                
            </div>

            <div class="flex flex-col justify-center items-center w-[80%] h-[90%] border  border-accent rounded-xl p-5">
                
                <div class="w-[70%] bg-yellow-400 rounded-full ">
                    <img alt="" src="./public/care.png"/>
                </div>
                <p class="text-xl text-accent front-bakbak font-bold mb-[15%]">PERSONALIZED CARE</p>
                <p class="text-center text-lg text-white">Every recovery plan is uniquely crafted to meet your device's specific needs.</p>
                
            </div>

            <div class="flex bg-accent flex-col justify-center items-center w-[80%] h-[90%] border  border-accent rounded-xl p-5">
                
                <div class="w-[70%] bg-green-400 rounded-full ">
                    <img alt="" src="./public/customer.png"/>
                </div>
                <p class="text-enter text-xl text-main front-bakbak font-bold mb-[15%]">CUSTOMER-CENTERED</p>
                <p class="text-center text-lg text-black">Your satisfaction is our top priority; we're here for you at every step.</p>
                
            </div>

        </div>

    </section>

    <section id="s4" class="s4 child h-[100vh] w-[100%] flex">

        <div class="flex contacts justify-center items-center contactBody w-[100%] h-[100%] gap-y-10">
            <div class="contact-head flex flex-col justify-center items-center w-[100%] gap-4">
                <p class="text-main font-bold text-6xl">Contact Us</p>
                <p  class="w-[50%] text-center text-main text-xl">Welcome to our contacts page, where connecting with us is just a message away. Whether you have questions, need assistance, or want to learn more about our services, we're here for you. Feel free to contact us through any of the channels below:</p>
            </div>

            <div class="general w-[100%] h-[100%] flex flex-col justify-start items-center text-center p-5 leading-none">
                <p class="w-[70%] p-3 text-xl bg-main text-accent rounded-xl mb-[10%]">General Inquiries</p>
                <p class="w-[80%] text-normal text-main rounded-xl">For general questions and information, please email us at</p>
                <u class="text-lg text-main">info@yourcompany.com</u>
            </div>

            <div class="phone w-[100%] h-[100%] flex flex-col justify-start items-center text-center p-5 leading-none">
                <p class="w-[70%] p-3 text-xl bg-main text-accent rounded-xl mb-[10%]">Phone</p>
                <p class="w-[75%] text-normal text-main rounded-xl">Prefer speaking with us directly? Give us a call at</p>
                <u class="text-lg text-main">  +63 955 327 5351.</u>
            </div>

            <div class="visit w-[100%] h-[100%] flex flex-col justify-start items-center text-center p-5 leading-none">
                <p class="w-[70%] p-3 text-xl bg-main text-accent rounded-xl mb-[10%]">Visit Us</p>
                <p class="w-[75%] text-normal text-main rounded-xl">If you're in the area, we'd love to meet you in person.</p>
                <u class="text-lg text-main">Evermall, Governor Perdices St 6200 Dumaguete City, Philippines.</u>
            </div>

            <div class="social w-[100%] h-[100%] flex flex-col justify-start items-center text-center p-5 leading-none">
                <p class="w-[70%] p-3 text-xl bg-main text-accent rounded-xl mb-[10%]">Social Media</p>
                <p class="w-[75%] text-normal text-main rounded-xl">Connect with us on social media for updates, tips, and community engagement. Find us on</p>
                <div class="flex gap-3 mt-[2%]">
                    <a href="https://www.instagram.com"><svg class="instagram w-8 h-8 fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#fafafa}</style><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
                    <a href="https://www.facebook.com/core1cellphoneandaccessories"><svg class="facebook w-8 h-8 fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#ffffff}</style><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a>
                    <a href="https://www.twitter.com"><svg class="twitter w-8 h-8 fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg></a>
                </div>
            </div>  
        </div>
        
        <div class="flex flex-col justify-center items-center footer w-[100%] h-[100%]">
            <p class="text-accent text-base">©2024 Manalo Gwapo. All rights reserved.</p>
        </div>
        
       
    </section>
    

</main>
    

<style module>
    .parent {
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

    .child {
        scroll-snap-align: center;
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

     
    .s2{
        background-image: url('./public/s2.1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .s3{
        background-image: url('./public/s1.1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: grid;
        grid-template-rows: 100px 1fr;
    }

    .s4{
        background-image: url('./public/s4.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 70px;
        grid-template-areas: 
        "contactBody"
        "footer";
    }

    .contacts{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 200px 1fr;
        grid-template-areas: 
        "contact-head contact-head contact-head contact-head"
        "general phone visit social"
    }

    .contact-head{
        grid-area: contact-head;
    }

    .contactBody{
        grid-area: contactBody;
    }
    .footer{
        grid-area: footer;
    }
    ::-webkit-scrollbar {
        width: 7px; /* Set the width of the scrollbar */
       
    }

    ::-webkit-scrollbar-thumb {
        background-color: #f9bc60; /* Set the color of the thumb (the draggable part) */
        border-radius: 5px; /* Optional: Add rounded corners to the thumb */
        outline: 1px solid #014447;
    }

    ::-webkit-scrollbar-track {
        background-color: #014447;
       
    }
    

    
</style>