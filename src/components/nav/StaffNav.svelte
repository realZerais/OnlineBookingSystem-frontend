<script lang="js">
    import logo from "$public/logo-white.png"
    import {logout} from "../../hooks/auth"

    import {fetchUserData} from "../../hooks/handleUser"

    import { onMount } from "svelte";
    let user = '';

    onMount(async ()=>{
      user = await fetchUserData();
    })
</script>
   
<div class="flex w-[7%] justify-start">
    <div class="container absolute flex flex-col w-[7%] h-[100%] bg-main border-r-2 border-r-white ">

      <div class="flex flex-wrap justify-start px-2 py-4 items-center gap-x-4 mr-3.5">
        <img src={logo} alt="" class="w-14 h-14 ml-2"/>
        <h3 class="text absolute ml-20 font-bold text text-2xl text-white font-sans hidden">CORE1</h3>
      </div>      
      <hr class="text self-center border-t-2 border-accent w-[80%] opacity-0"> 

      <div class="btn_container flex flex-col w-[100%] h-[auto] gap-y-5 pt-10">

        <a class="unhover" href="/DashboardPage/staff/dashboard">
          <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
              </svg>
              <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Dashboard</p>
          </button>
        </a>  

        <a class="unhover" href="/DashboardPage/staff/appointments">
            <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Appointments</p>
            </button>
          </a>  

          <a class="unhover" href="/DashboardPage/staff/logs">
            <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"/>
              </svg>
                <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Logs</p>
            </button>
          </a>

          <a class="unhover" href="/DashboardPage/staff/profile">
            <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
              </svg>
                <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Profile</p>
            </button>
          </a>  

          <div class="w-[90%]"> 
            <button on:click={logout} class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center gap-x-5 rounded-3xl w-[40%] h-10 px-4">
              <svg class="unhover icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
              </svg>
              <p class="text text-mainParagraph self-center hidden group-hover:text-main">Logout</p>
            </button>
          </div>
       


      </div>

      <div class="account relative flex flex-col  items-center justify-end h-[100%] opacity-0 my-4">
        
  
            <div class="self-center justify-self-center mb-1">
              <strong class="text-sm text-mainParagraph">{user.full_name}</strong>
            </div>     
            
            <div class="self-center">
              <p class="text-xs text-mainParagraph">{user.email}@gmail.com</p>
            </div>        
          </div>
      


    </div>
  </div> 
   
<style>
   
  .container{
    transition: width 1s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0; /* Start with opacity 0 */
      
    }

    20% {
      opacity: 0; /* Start with opacity 0 */
      
    }

    50% {
      opacity: .4; /* Start with opacity 0 */
      
    }

    80% {
      opacity: .8 ; /* Start with opacity 0 */
      
    }

    100% {
      opacity: 1; /* End with opacity 100% (fully visible) */
    }
  }

  .container:hover{ 
    width: 16%;
    position: absolute;
  }

  

  .container:hover .btn, a{
    display: block;
    width: 90%;
    
  }
/* 
  .container:hover .icon{
  fill: #F9BC60;
  }
*/

  .container:hover .text{
    display: block;
    animation: fadeIn 1s linear forwards;
  }

  .container:hover .account{
    animation: fadeIn 1s linear forwards;
  }

  .btn:focus .icon{
  fill: #f9bc60;
  }
  
</style>