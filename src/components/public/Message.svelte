<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import warning from "../../assets/warning.svg";
  import success from "../../assets/success.svg";
  import error from "../../assets/error.svg";
  export let content: string;
  export let type: "warning" | "success" | "error" = "warning";
  export let onClose: () => void;
  let open = false;
  onMount(() => {
    open = true
    new Promise<void>((resolve) => 
      setTimeout(() => {
        open = false;
        resolve();
      },15000)
    ).then(() => {
      return setTimeout(onClose, 500)
    })
  });
</script>

<!-- ly: svelte would not apply translate-x-[-50%] when transition-in begins, so i use animate-fly-in, actually it is dumb:( -->
<!-- ly:sometimes(i don't know when) UI would shake when flies in but i don't use know why, its fucking confusing. :( -->
{#if open}
  <div
    out:fade
    class="fixed animate-fly-in shadow-1 top-[5rem] left-[50%] flex items-center gap-[1rem] bg-white border-[1px] border-gray-150 rounded-lg h-[40px] p-[9px_16px] translate-x-[-50%]"
  >
    <img
      src={type === "warning" ? warning : type === "success" ? success : error}
      alt={type}
    />
    <p>{content}</p>
  </div>
{/if}
