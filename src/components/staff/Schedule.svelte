<script>
</script>

<div class="body">

    <div class="header flex flex-col self-start rounded-3xl w-[100%] h-[100%] p-8 pb-14 justify-center gap-y-5 ">
        <strong class="text-6xl text-mainParagraph tracking-widest ml-[9%]">Manage Schedule</strong>
        <hr class="border-t-2 border-accent w-6/12 ml-[9%]"> 
    </div>

    <div class="content flex justify-center items-center row-span-2 w-[100%]">
        <div class="flex justify-center items-center w-[80%] h-[90%] bg-mainParagraph  border-black border-2 shadow-leftbottom ml-[3%]">
            <h1 class="text-4xl">staff schedule goes here</h1>
        </div>
    </div>
</div>


<style>

    .body{
        display: grid;
        background-color: #004647;
      width: 100%;
      height: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 120px 1fr ;   
      
    }

    .header{
        visibility: hidden;
        margin-left: -20%;
        animation: to-right .3s linear forwards;
    }



    @keyframes to-right {
       0% {
         visibility: hidden; /* Start with opacity 0 */
       }
       100% {
         visibility: visible;
         margin-left: 0%;
       }
     }


</style>