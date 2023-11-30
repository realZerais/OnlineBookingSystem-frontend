<script lang="js">
  import logo from "../../public/logo-white.png"
  import userImage from "../../public/user-sample-image.png"
 </script>
 
 <div class="flex justify-start col-span-1 row-span-2">
     <div class="container absolute flex flex-col w-[7%] h-[100%] bg-main border-r-2 border-r-white ">
 
       <div class="flex flex-wrap justify-start px-2 py-4 items-center gap-x-4 mr-3.5">
         <img src={logo} alt="" class="w-14 h-14 ml-2"/>
         <h3 class="text absolute ml-20 font-bold text text-2xl text-white font-sans hidden">CORE1</h3>
          
       </div>      
       <hr class="text self-center border-t-2 border-accent w-[80%] opacity-0"> 
 
       <div class="btn_container flex flex-col w-[100%] h-[auto] gap-y-5 pt-10">
 
         <a class="unhover" href="/DashboardPage/staffDashboardPage/Dashboard/home">
           <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
               <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                 <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
               </svg>
               <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Home</p>
           </button>
         </a>  
 
         <a class="unhover" href="/DashboardPage/staffDashboardPage/Dashboard/booking">
         <button class="btn  ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center gap-x-5 rounded-3xl w-[40%] h-10 px-4">
           
             <svg class=" icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
               <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/>
             </svg>
             <p class="text text-mainParagraph self-center hidden group-hover:text-main">Booking</p>
         </button>
       </a>  
 
       <a class="unhover" href="/DashboardPage/staffDashboardPage/Dashboard/status">
         <button class="btn  ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center gap-x-5 rounded-3xl w-[40%] h-10 px-4">
             <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
               <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/>
             </svg>
             <p class="text text-mainParagraph self-center hidden group-hover:text-main">Status</p>
         </button>
       </a>

       <a class="unhover" href="/DashboardPage/staffDashboardPage/Dashboard/receipt">
        <button class="btn  ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center gap-x-5 rounded-3xl w-[40%] h-10 px-4">
          <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"/>
          </svg>
            <p class="text text-mainParagraph self-center hidden group-hover:text-main">Receipt</p>
        </button>
      </a>
 
       <a class="unhover" href="/DashboardPage/staffDashboardPage/Dashboard/profile">
         <button class="btn  ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center gap-x-5 rounded-3xl w-[40%] h-10 px-4">
           <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
           </svg>
             <p class="text text-mainParagraph self-center hidden group-hover:text-main">Profile</p>
         </button>
       </a>
         
       <a class="unhover" href="/login">
         <button class="btn  ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center gap-x-5 rounded-3xl w-[40%] h-10 px-4">
             <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
             </svg>
             <p class="text text-mainParagraph self-center hidden group-hover:text-main">Logout</p>
         </button>
       </a>
 
       </div>
 
       <div class="account relative flex flex-col justify-center items-center justify-end h-[100%] mb-5 opacity-0">
         <div class="flex h-[100%] ">
               <img class="rounded-full w-16 h-16 bg-zinc-400 self-end border border-accent border-2" src={userImage} alt="">
         </div>
   
             <div class="self-center justify-self-center mb-1">
               <strong class="text-sm text-mainParagraph">Marian Kent Manalo</strong>
             </div>     
             
             <div class="self-center">
               <p class="text-xs text-mainParagraph">STAFF@gmail.com</p>
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