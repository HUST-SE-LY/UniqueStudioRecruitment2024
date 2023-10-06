<script lang="ts">
  import { routes } from "./router";
  import logo from "/src/assets/logo.svg";
  import groups from "/src/assets/groups.svg";
  import Router, { location, push } from "svelte-spa-router";
  import cx from "clsx";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="bg-[rgba(0,0,0,0.04)] pt-[6rem] overflow-scroll min-h-screen h-full">
  <div
    class=" p-[0.5rem_4rem] fixed grid grid-cols-3 bg-[rgba(49,84,174,0.58)] w-full h-[5rem] top-0 left-0 z-20"
  >
    <a
      class="self-end flex-shrink-0"
      href="https://hustunique.com"
      target="_blank"
    >
      <div class="gap-[0.5rem] flex items-center">
        <img draggable={false} src={logo} alt="UniqueStudio" />
        <p class="text-white mb-[0.5rem] text-lg">联创团队</p>
      </div>
    </a>
    <div
      class="self-center relative flex gap-[2rem] text-white justify-self-center"
    >
      <div class="cursor-pointer" on:click={() => push("/")}>我的申请</div>
      <div class="cursor-pointer" on:click={() => push("/user")}>个人信息</div>
      <div
        class={cx([
          "bg-white w-[4rem] h-[3px] rounded-full absolute bottom-[-0.5rem] transition-all",
          $location === "/user" ? "translate-x-[6rem]" : $location === "/" ? '' : 'hidden',
        ])}
      />
    </div>
    <div class="ml-auto flex-shrink-0 self-center text-white">111</div>
  </div>
  <div class="bg-[rgba(53,100,221,1)] fixed top-0 left-0 -z-10 overflow-hidden w-full h-[15rem]">
    <img src={groups} alt="groups_logo" class="select-none w-full" />
  </div>
  <Router {routes} />
</div>
