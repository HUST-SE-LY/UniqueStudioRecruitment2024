<script>

  import { fade, fly } from "svelte/transition";
  import { Group, ProcessState, Step } from "../config/const";
  import SingleApplicationItem from "../components/history/SingleApplicationItem.svelte";

</script>
<div class="h-full mt-[1rem] w-[60%] mx-auto flex flex-col">
  <p in:fade out:fade class="text-[26px] mb-[1rem] text-white">申请记录</p>
  <SingleApplicationItem title="2023年秋季招新" group={Group.PM} step='面试时间选择' state={ProcessState.PROCESSING}  />
</div>