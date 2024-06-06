<script>

    export let appointment_status;
    export let book_date;
    export let issue_description;
    export let remark;

</script>

<div class="flex flex-col justify-start">

    <div class="text-xl font-bold">
        {book_date}
    </div>

    <div>
        appointment status :  
        {#if appointment_status == 'pending'}
            <span class="text-accent">{appointment_status}</span>
        {:else if appointment_status == 'rejected'}
            <span class="text-red-700">{appointment_status}</span>
        {:else if appointment_status == 'approved'}
            <span class="text-main">{appointment_status}</span>
        {/if}
        
    </div>

    <div>
        issue: {issue_description}
    </div>

    <div>
        remark : {#if remark == null}
            no remark yet
        {:else}
            {remark}
        {/if}
    </div>
    
  
    

   
    
    
    
</div>