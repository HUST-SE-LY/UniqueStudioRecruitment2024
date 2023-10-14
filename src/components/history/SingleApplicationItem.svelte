<script lang="ts">
  import type { Group, ProcessState, Step } from "../../config/const";
  import ApplicationState from "./ApplicationState.svelte";
  import ApplicationTitle from "./ApplicationTitle.svelte";
  export let title:string;
  export let group:Group;
  export let step: Step;
  export let state: ProcessState
</script>

<div class="rounded-[20px] bg-white p-[3rem_4rem]">
  <div class="flex gap-[0.5rem]">
    <ApplicationTitle {title} {group} />
    <ApplicationState {state} />
  </div>
  <p>{step}</p>
</div>