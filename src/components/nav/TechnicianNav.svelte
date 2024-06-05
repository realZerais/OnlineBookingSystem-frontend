<script lang="js">
    import logo from "$public/logo-white.png"
    import userImage from "$public/user-sample-image.png"
    import {logout} from "../../hooks/auth"
</script>
   
<div class="flex w-[7%]  justify-start ">
    <div class="container absolute flex flex-col w-[7%] h-[100%] bg-main border-r-2 border-r-white ">

      <div class="flex flex-wrap justify-start px-2 py-4 items-center gap-x-4 mr-3.5">
        <img src={logo} alt="" class="w-14 h-14 ml-2"/>
        <h3 class="text absolute ml-20 font-bold text text-2xl text-white font-sans hidden">CORE1</h3>
      </div>      
      <hr class="text self-center border-t-2 border-accent w-[80%] opacity-0"> 

      <div class="btn_container flex flex-col w-[100%] h-[auto] gap-y-5 pt-10">

        <a class="unhover" href="/DashboardPage/technician/dashboard">
          <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
              </svg>
              <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Dashboard</p>
          </button>
        </a>  

        <a class="unhover" href="/DashboardPage/technician/pending">
            <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Pending</p>
            </button>
          </a>  

          

          <a class="unhover" href="/DashboardPage/technician/ongoing">
            <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Ongoing</p>
            </button>
          </a>  

          <a class="unhover" href="/DashboardPage/technician/logs">
            <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"/>
              </svg>
                <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Repair Logs</p>
            </button>
          </a>  

        
          <a class="unhover" href="/DashboardPage/technician/profile">
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

      <div class="account relative flex flex-col items-center justify-end h-[100%] opacity-0">
  
        <div class="self-center justify-self-center mb-1">
          <strong class="text-sm text-mainParagraph">Marian Kent Manalo</strong>
        </div>     
        
        <div class="self-center">
          <p class="text-xs text-mainParagraph">USER@gmail.com</p>
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