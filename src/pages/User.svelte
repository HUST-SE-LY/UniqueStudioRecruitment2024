<script lang='ts'>
  import { fade, fly } from "svelte/transition";
  import UserInfoTitle from "../components/user/UserInfoTitle.svelte";
  import SingleInputInfo from "../components/user/SingleInputInfo.svelte";
  import SingleSelectInfo from "../components/user/SingleSelectInfo.svelte";
  import edit from "/src/assets/edit.svg";
  import cx from "clsx";
  import Button from "../components/public/Button.svelte";
  import { DEPARTMENTS, GENDERS, GRADE, RANK } from "../config/const";
  import type { College } from "../types";
  let editMode = false;
  let name = "ccq";
  let gender = "男";
  let grade = "大一";
  let gpa = "前100%";
  let group = "Web";
  let colleges = Object.keys(DEPARTMENTS);
  let college = "";
  //this asset would be wrong because I just don't want to see TypeError
  $: majors = DEPARTMENTS[college as College] || [];
  let major = ''
</script>

<div class="h-full w-[60%] mx-auto flex flex-col">
  <p in:fade out:fade class="text-[26px] text-white">个人信息</p>
  <div
    in:fly={{ y: 50, duration: 500, delay: 500 }}
    out:fly={{ y: 50, duration: 500 }}
    class="w-[full] my-[1rem] bg-white rounded-[20px] p-[30px_60px]"
  >
    <div class="flex items-center mb-[1rem]">
      <UserInfoTitle title="基本信息" />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={() => {
          editMode = !editMode;
        }}
        class={cx([
          "ml-auto cursor-pointer border-blue-300 border-[1px] rounded-[0.5rem] p-[0.25rem_1rem] flex gap-[0.25rem] items-center",
          editMode && "hidden",
        ])}
      >
        <img src={edit} alt="edit" />
        <p class="text-blue-300">编辑</p>
      </div>
    </div>

    <div class="grid grid-cols-2 mb-[2rem] w-full gap-[2rem]">
      <SingleInputInfo {editMode} isNecessary name="姓名" bind:content={name} />
      <SingleSelectInfo
        {editMode}
        isNecessary
        name="性别"
        bind:content={gender}
        selectItems={GENDERS}
      />
      <SingleSelectInfo
        {editMode}
        isNecessary
        name="年级"
        bind:content={grade}
        selectItems={GRADE}
      />
      <SingleSelectInfo
        selectItems={colleges}
        {editMode}
        isNecessary
        name="学院"
        bind:content={college}
      />
      <SingleSelectInfo
        placeholder={majors.length ? '' : '请选择学院'}
        selectItems={majors}
        {editMode}
        isNecessary
        name="专业"
        bind:content={major}
      />
      <SingleSelectInfo
        {editMode}
        isNecessary
        name="加权"
        bind:content={gpa}
        selectItems={RANK}
      />
      <SingleInputInfo
        {editMode}
        isNecessary
        name="电话"
        bind:content={major}
      />
      <SingleInputInfo
        {editMode}
        isNecessary
        name="邮箱"
        bind:content={major}
      />
      <SingleInputInfo {editMode} name="推荐人" bind:content={major} />
      <SingleSelectInfo
        {editMode}
        isNecessary
        name="意向组别"
        bind:content={group}
        selectItems={[
          "AI",
          "Android",
          "Design",
          "Game",
          "iOS",
          "Lab",
          "PM",
          "Web",
        ]}
      />
      <div class="flex col-span-2 gap-[1rem]">
        <p class="shrink-0 opacity-50 mt-[0.75rem]">*自我介绍</p>
        <textarea
          disabled={!editMode}
          placeholder="请输入"
          class="w-full transition-all outline-none border-transparent border-[1px] focus:border-[#165DFF] resize-none rounded-[8px] p-[0.75rem_1rem] bg-[#FAFAFA] h-[10rem]"
        />
      </div>
    </div>
    <div class="w-full h-[1px] mb-[2rem] bg-[#E5E6EB]" />
    <UserInfoTitle title="附件简历" />
    <div
      class="flex justify-center bg-[#FAFAFA] rounded-[1rem] py-[2rem] items-center flex-col gap-[1rem]"
    >
      {#if editMode}
        <p class="font-bold text-lg">上传简历</p>
        <div
          class="cursor-pointer border-[1px] border-[#0A84FF] text-[#0A84FF] p-[0.5rem_2rem] hover:bg-[#0A84FF] hover:text-white transition-all rounded-[0.5rem]"
        >
          选择文件
        </div>
        <input type="file" class="hidden" />
      {:else}
        <p class="font-bold text-lg text-gray-400 select-none">暂无简历</p>
      {/if}
    </div>
    {#if editMode}
      <div class="float-right mt-[1rem] flex gap-[1rem]">
        <Button>取消</Button>
        <Button highlight>提交</Button>
      </div>
    {/if}
  </div>
</div>
