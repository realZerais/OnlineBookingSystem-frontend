<script lang="js">
    import logo from "$public/logo-white.png"
    import userImage from "$public/user-sample-image.png"
    import {logout} from "../../hooks/auth"
</script>
   
<div class="flex w-[7%] justify-start ">
    <div class="container absolute flex flex-col w-[7%] h-[100vh] bg-main border-r-2 border-r-white ">

      <div class="flex flex-wrap justify-start px-2 py-4 items-center gap-x-4 mr-3.5">
        <img src={logo} alt="" class="w-14 h-14 ml-2"/>
        <h3 class="text absolute ml-20 font-bold text text-2xl text-white font-sans hidden">CORE1</h3>
      </div>      
      <hr class="text self-center border-t-2 border-accent w-[80%] opacity-0"> 

      <div class="btn_container flex flex-col w-[100%] h-[auto] gap-y-5 pt-10">

        <a class="unhover" href="/DashboardPage/admin/dashboard">
          <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
              </svg>
              <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Dashboard</p>
          </button>
        </a>  

        <a class="unhover" href="/DashboardPage/admin/users">
            <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
                <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Manage Users</p>
            </button>
          </a>  

          <a class="unhover" href="/DashboardPage/admin/bookings">
            <button class="btn ml-5 flex flex-wrap group hover:bg-accent text-base text-black items-center rounded-3xl w-[40%] h-10 px-4">
              <svg class="icon mt-1 flex absolute fill-mainParagraph w-5 h-5 mr-5 group-hover:fill-main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                <p class="text text-mainParagraph self-center hidden group-hover:text-main ">Manage Books</p>
            </button>
          </a>  

          <a class="unhover" href="/DashboardPage/admin/profile">
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
          <strong class="text-sm text-mainParagraph">ADMIN</strong>
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