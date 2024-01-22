<script>
</script>

<div class="flex flex-col justify-start items-center gap-5 pb-10 pt-5 ">
  <div class="header flex flex-col items-center justify-center h-[10%] w-[100%] rounded-sm text-4xl gap-2">
    <strong class="text-4xl text-mainParagraph tracking-widest ml-[10%]">HOME</strong>
    <hr class="border-t-2 border-accent w-6/12 ml-[10%]"> 
  </div>

  <div class="flex flex-col justify-center  h-[80vh] w-[75%] rounded-xl  bg-white text-4xl gap-4 ml-5">
    <h1 class="text-4xl text-center">HOME CONTENT</h1>
  </div>
  

</div>


<style>


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