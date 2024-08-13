<script>
    import "../app.css";
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';

    export const prerender = true;
</script>

<slot />