<script>


  export let title;

  
  export let pendingCount;
  export let repairingCount;
  export let doneCount;

    

</script>

<div class="w-[30%] h-[25vh] bg-white flex flex-col items-start justify-start p-4  gap-4 rounded-lg shadow-md">
  
  
    <div class="flex w-[100%] h-1/4  justify-start items-start text-xl text-gray-500 font-bold capitalize rounded-md">
      {title}
    </div>
  
  {#if title === "PENDING REPAIRS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-4xl text-secondary font-bold capitalize rounded-md">
      {pendingCount} Books
    </div>

  {:else if title === "ONGOING REPAIRS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-4xl text-accent font-bold capitalize rounded-md">
      {repairingCount} Books
    </div>

  {:else if title === "DONE REPAIRS"}
    <div class="flex w-[100%] h-3/4  justify-start items-center text-4xl text-main font-bold capitalize rounded-md">
      {doneCount} Books
    </div>
  {/if}
</div>