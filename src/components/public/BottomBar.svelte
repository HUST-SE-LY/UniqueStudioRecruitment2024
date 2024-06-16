<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade, slide } from 'svelte/transition';
  import cx from 'clsx';
  import { t } from '../../utils/t';
  export let show = false;
  export let className = '';
  export let confirm = false;
  const dispatch = createEventDispatcher();
  const close = () => {
    dispatch('close');
  };
  const ensure = () => {
    dispatch('confirm');
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
{#if show}
  <div
    transition:slide
    class={cx([
      'bg-white rounded-t-md text-sm z-30 fixed bottom-0 left-0 w-full transition-all',
    ])}
  >
    <div class="flex p-[1rem] h-[53px] items-center">
      <p class="text-gray-300" on:click={close}>
        {$t('history.mobile.cancel')}
      </p>
      {#if confirm}
        <p class="text-blue-400 ml-auto" on:click={ensure}>
          {$t('history.mobile.confirm')}
        </p>
      {/if}
    </div>
    <div class={className}>
      <slot />
    </div>
  </div>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if show}
  <div
    on:click={close}
    transition:fade
    class={cx(['fixed z-10 bg-black/60 w-full h-full top-0 left-0'])}
  ></div>
{/if}
