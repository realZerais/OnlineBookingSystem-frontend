<script>
    import { onMount } from "svelte";
    import {fetchAllUserProgress} from "../../hooks/handleProgress"
    import {fetchUser} from "../../hooks/auth"
    import { userName } from "../../hooks/auth";
    import { format, parseISO } from 'date-fns';

    let allUserBookProgress = [];

    const allUserProgress = async () =>{
        fetchUser();

        allUserBookProgress = await fetchAllUserProgress($userName);

        allUserBookProgress.forEach(e => {
            let dateString = e.progress_time;
            const parsedDate = parseISO(dateString);
            const formattedDate = format(parsedDate, 'MMMM d, yyyy h:mm aa');
            e.progress_time = formattedDate;
            
        });
    }
    
    onMount(allUserProgress);
</script>

<div class="bg-white p-4 shadow-md h-[50vh] border-2 border-main rounded-md overflow-y-auto">
    <div class="flex flex-col items-center ">
    
        <h2 class="text-lg font-bold mb-2">Repair Logs</h2>
        {#each allUserBookProgress as e}
            <div>
                {e.progress_time} - {e.progress_description}
                <hr class="my-4 bg-gray-500">
            </div>
           
            
        {/each}
        
    </div>
</div>