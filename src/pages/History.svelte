<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { GROUP, Group, ProcessState, Step } from "../config/const";
  import SingleApplicationItem from "../components/history/SingleApplicationItem.svelte";
  import { userInfo } from "../stores/userInfo";
  import { getRecruitmentById } from "../requests/recruitment/getById";
  import { recruitment } from "../stores/recruitment";
</script>

<div class="h-full relative my-[1rem] w-[60%] mx-auto flex flex-col">
  <p in:fade out:fade class="text-[26px] text-white">申请记录</p>
  <div
    in:fly={{ y: 50, duration: 500, delay: 500 }}
    out:fly={{ y: 50, duration: 500 }}
  >
    {#if $userInfo && $recruitment}
      {#if $recruitment.uid !== $userInfo.applications[0].recruitment_id && (new Date()).getTime() >= (new Date($recruitment.beginning)).getTime()}
        <SingleApplicationItem
          index={0}
          title={$recruitment.name}
          step={Step['SignUp']}
          state={ProcessState.PROCESSING}
        />
      {/if}
      {#each $userInfo.applications as application, i}
        {#await getRecruitmentById(application.recruitment_id) then res}
          <SingleApplicationItem
            index={i}
            title={res.data.name}
            group={Group[application.group]}
            step={Step[application.step]}
            state={ProcessState.PROCESSING}
          />
        {/await}
      {/each}
    {/if}
  </div>
</div>
