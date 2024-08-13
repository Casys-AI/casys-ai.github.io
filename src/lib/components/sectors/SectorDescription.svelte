<script>
    import {onMount} from 'svelte';
    import {fade} from 'svelte/transition';

    export let sector = null;

    let displayText = "";
    let fullText = "";
    let typing = false;

    $: if (sector) {
        fullText = sector.description || "No description available.";
        startTyping();
    } else {
        fullText = "Click on a node to see details.";
        startTyping();
    }

    function startTyping() {
        typing = true;
        displayText = "";
        typeText();
    }

    function typeText() {
        if (displayText.length < fullText.length) {
            displayText += fullText[displayText.length];
            setTimeout(typeText, 30); // Adjust the speed of typing here
        } else {
            typing = false;
        }
    }

    onMount(() => {
        if (fullText) {
            startTyping();
        }
    });
</script>

<div class="bg-white p-8 rounded-lg shadow-lg flex flex-col items-start">
    {#if sector}
        <h3 class="text-2xl font-bold text-cassis-800 mb-4 font-mono" transition:fade>
            {sector.label}
        </h3>
    {/if}
    <p class="text-midnight-700 text-lg font-mono h-full">
        {#if typing}
            {displayText}
            <span class="cursor">|</span>
        {:else}
            {fullText}
        {/if}
    </p>
</div>

<style>
    div {
        height: 100%;
        min-height: 200px; /* Adjust as needed */
    }

    .cursor {
        animation: blink 0.7s infinite;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>