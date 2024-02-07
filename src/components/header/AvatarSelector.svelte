<script lang="ts">
  import { AVATARS } from "../../config/const";
  import Button from "../public/Button.svelte";
  import Popover from "../public/Popover.svelte";
  import close from '../../assets/close.svg'
  export let onClose:() => void
  let selectedAvatar:string;
  const selectAvatar = (src:string) => {
    if(src === selectedAvatar) selectedAvatar = ""
    else selectedAvatar = src
  }
</script>
<div class="border-b-gray-100 border-b-[1px] h-[48px] p-[12px_20px] leading-[24px] flex">
  <p>更换MBTI头像</p>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
   <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img src={close} alt="关闭" class="cursor-pointer w-[16px] ml-auto" on:click={onClose} />
</div>
<div class="grid grid-cols-6 gap-[20px] p-[20px] border-b-[1px] border-b-gray-150">
  <div class="relative select-none w-[64px] h-[64px]">
    {#if selectedAvatar}
      <img src={selectedAvatar} alt="当前头像" />
    {:else}
      <div class="text-text-3  text-center leading-[64px] text-xl">B</div>
    {/if}

    <div class="absolute rounded-full top-0 left-0 text-center text-xs w-full h-full leading-[64px] z-10 bg-black/30 text-white">当前头像</div>
  </div>
  {#each AVATARS as avatarSrc}
    <Popover>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img on:click={() => selectAvatar(avatarSrc)} slot="children" src={avatarSrc} alt={avatarSrc.slice(1, 5)} class="w-[64px] cursor-pointer h-[64px]" />
      <p slot="content">{avatarSrc.slice(1, 5)}</p>
    </Popover>
  {/each}
</div>
<div class="w-full h-[64px] flex flex-row-reverse gap-[1rem] p-[1rem]">
  <Button className="rounded-full h-[32px] text-sm leading-[32px] w-[76px]" highlight>确定</Button>
  <Button onClick={onClose} className="rounded-full h-[32px] text-sm leading-[32px] w-[76px]">取消</Button>
</div>