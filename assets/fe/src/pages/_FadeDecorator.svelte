<script lang="ts">
    import { fly } from "svelte/transition";
    import { direction } from "../stores/animation.store";

    let container: HTMLElement;
    function animationStart() {
        container.style.position = "absolute";
    }
    function animationEnd() {
        container.style.position = "relative";
    }

    $: flyParams = $direction === "left" ? { x: -100 } : { x: 100 };

</script>

<div
    bind:this={container}
    transition:fly={flyParams}
    on:outrostart={animationStart}
    on:introstart={animationStart}
    on:introend={animationEnd}
    on:outroend={animationEnd}
>
    <slot />
</div>
