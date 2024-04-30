<script lang="ts">
  import { routes } from './router';
  import logo from '/src/assets/logo.svg';
  import language from '/src/assets/language.svg'
  import Router, { location, push } from 'svelte-spa-router';
  import cx from 'clsx';
  import { slide } from 'svelte/transition';
  import Modal from './components/public/Modal.svelte';
  import AvatarSelector from './components/header/AvatarSelector.svelte';
  import { onMount } from 'svelte';
  import { getInfo } from './requests/user/getInfo';
  import { userInfo } from './stores/userInfo';
  import { Message } from './utils/Message';
  import { recruitment } from './stores/recruitment';
  import { getLatestRecruitment } from './requests/recruitment/getLatest';
  import Groups from './icons/Groups.svelte';
  import { latestInfo } from './stores/latestApplication';
  let showAvatarDetail = false;
  let showAvatarSelector = false;
  let showLanguageSelector = false;
  let isLoading = true;
  ($userInfo && $latestInfo) ||
    getInfo()
      .then((res) => {
        userInfo.setInfo(res.data);
        latestInfo.setApplication(res.data.applications[0]);
      })
      .catch(() => {
        Message.error('获取信息失败');
      })
      .finally(() => {
        isLoading = false;
      });
  $recruitment ||
    getLatestRecruitment()
      .then((res) => {
        recruitment.setRecruitments(res.data);
      })
      .catch(() => {
        Message.error('获取信息失败');
      });
  //ly: this is the test cookie
  onMount(() => {
    document.cookie = 'SSO_SESSION=unique_web_candidate;';
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="bg-[rgba(0,0,0,0.04)] pt-[6rem] overflow-scroll min-h-screen h-full"
>
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
      <div class="cursor-pointer" on:click={() => push('/')}>我的申请</div>
      <div class="cursor-pointer" on:click={() => push('/user')}>个人信息</div>
      <div
        class={cx([
          'bg-white w-[4rem] h-[3px] rounded-full absolute bottom-[-0.5rem] transition-all',
          $location === '/user'
            ? 'translate-x-[6rem]'
            : $location === '/'
              ? ''
              : 'hidden',
        ])}
      />
    </div>
    {#if $userInfo}
      <div
        class="relative flex items-center gap-[24px] select-none ml-auto mr-[2rem] flex-shrink-0 self-center"
      >
        <div>
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <img on:click={() => showLanguageSelector = !showLanguageSelector} alt="language" class="w-[24px] cursor-pointer h-[24px]" src={language} />
          {#if showLanguageSelector}
          <div
            transition:slide
            class="absolute bg-white w-[149px] rounded-[6px] py-[6px] top-[48px] right-[64px]"
          >
            <button
              on:click={() => {
                showAvatarDetail = false;
                showAvatarSelector = true;
              }}
              class="h-[46px] hover:bg-gray-150 leading-[46px] text-center w-full"
              >更换头像</button
            >
            <button
              class="text-red-warning h-[46px] hover:bg-gray-150 leading-[46px] text-center w-full"
              >退出登录</button
            >
          </div>
        {/if}
        </div>
        <div class="relative">
          <div
            on:click={() => (showAvatarDetail = !showAvatarDetail)}
            class=" bg-white w-[40px] h-[40px] rounded-full text-text-3 cursor-pointer leading-[40px] text-center"
          >
            {$userInfo.name[0]}
          </div>
          {#if showAvatarDetail}
            <div
              transition:slide
              class="absolute bg-white w-[149px] rounded-[6px] py-[6px] top-[48px] right-0"
            >
              <button
                on:click={() => {
                  showAvatarDetail = false;
                  showAvatarSelector = true;
                }}
                class="h-[46px] hover:bg-gray-150 leading-[46px] text-center w-full"
                >更换头像</button
              >
              <button
                class="text-red-warning h-[46px] hover:bg-gray-150 leading-[46px] text-center w-full"
                >退出登录</button
              >
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
  <div
    class="bg-[rgba(53,100,221,1)] fixed top-0 left-0 -z-10 overflow-hidden w-full h-[15rem]"
  >
    <Groups />
  </div>
  {#if $userInfo}
    <Router {routes} />
  {/if}
</div>

<Modal
  className="w-[524px]"
  onCancel={() => (showAvatarSelector = false)}
  visible={showAvatarSelector}
>
  <AvatarSelector onClose={() => (showAvatarSelector = false)} />
</Modal>
