<script>

  import { fade, fly } from "svelte/transition";
  import Button from "../components/public/Button.svelte";
  import ApplicationState from "../components/history/ApplicationState.svelte";
  import { ProcessState } from "../config/const";

</script>
<div class="h-full mt-[1rem] w-[60%] mx-auto flex flex-col">
  <p in:fade out:fade class="text-[26px] text-white">申请记录</p>
  <ApplicationState state={ProcessState.OUT} />
</div>