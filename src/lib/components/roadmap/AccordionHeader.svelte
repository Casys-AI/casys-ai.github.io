<script>
    import {CaretDownSolid} from 'flowbite-svelte-icons';

    export let phaseData;
    export let index;
    export let isMobile;
    export let openIndex;
    export let toggleAccordion;

    $: isOpen = !isMobile || openIndex === index;
</script>

<div
        aria-controls="content-{index}"
        aria-expanded={isOpen}
        class="p-6 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-pearl-200"
        on:click={() => toggleAccordion(index)}
        on:keydown={(e) => e.key === 'Enter' && toggleAccordion(index)}
        role="button"
        tabindex="0"
>
    <div class="flex justify-between items-center">
        <div>
            <h3 class="text-2xl font-bold text-midnight-900 mb-2 font-mono">
                {phaseData.phase}
            </h3>
            <p class="text-sm text-midnight-700">
                Duration: {phaseData.duration}
            </p>
        </div>
        <div class="flex items-center text-cassis-600">
            {#if isMobile}
                <span class="mr-2 text-sm font-medium">
                    {isOpen ? 'Click to collapse' : 'Click to expand'}
                </span>
                <CaretDownSolid
                        class="w-6 h-6transform transition-transform duration-300 {isOpen ? 'rotate-180' : ''}"/>
            {/if}
        </div>
    </div>
</div>