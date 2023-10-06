<script>

  import { fade, fly } from "svelte/transition";
  import Button from "../components/public/Button.svelte";

</script>
<div class="h-full mt-[1rem] w-[60%] mx-auto flex flex-col">
  <p in:fade out:fade class="text-[26px] text-white">申请记录</p>
  <div in:fly={{y: 50, duration: 500, delay: 500}} out:fly={{y: 50, duration: 500}}  class="w-[full] flex justify-center items-center mt-[1rem] bg-white rounded-[20px] h-[200px]">
    <Button content="立即申请" highlight />
  </div>
</div>