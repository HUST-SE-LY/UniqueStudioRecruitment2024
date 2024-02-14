<script>

  import { fade, fly } from "svelte/transition";
</script>
<div class="h-full mt-[1rem] w-[60%] mx-auto flex flex-col">
  <p in:fade class="text-[26px] text-white">未知页面</p>
  <div in:fly={{y: 50, duration: 500, delay: 500}} out:fly={{y: 50, duration: 500}} class="w-[full] mt-[1rem] bg-white rounded-[20px] h-[200px] p-[20px]">
    <p>你好像来到了不存在的页面哦～</p>
  </div>
</div>