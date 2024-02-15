<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import UserInfoTitle from "../components/user/UserInfoTitle.svelte";
  import SingleInputInfo from "../components/user/SingleInputInfo.svelte";
  import SingleSelectInfo from "../components/user/SingleSelectInfo.svelte";
  import edit from "/src/assets/edit.svg";
  import cx from "clsx";
  import Button from "../components/public/Button.svelte";
  import word from "../assets/word.svg";
  import { DEPARTMENTS, GENDERS, GRADE, Group, RANK } from "../config/const";
  import type { College } from "../types";
  import { onMount } from "svelte";
  import { getInfo } from "../requests/user/getInfo";
  import { userInfo } from "../stores/userInfo";
  import { getRecruitmentById } from "../requests/recruitment/getById";
  import { getResume } from "../requests/user/getResume";
  import { recruitment } from "../stores/recruitment";
  import Popover from "../components/public/Popover.svelte";
  import { Message } from "../utils/Message";
  let editMode = false;
  let colleges = Object.keys(DEPARTMENTS);
  let college = "";
  let resume: File;
  let fileInput: HTMLInputElement;
  let { rank, referrer, major, institute, group, grade, intro, uid } =
    $userInfo.applications[0];
  //ly:this asset would be wrong but I just don't want to see TypeError :)
  $: majors = DEPARTMENTS[institute as College] || [];
  const downloadResume = () => {
    getResume(uid);
  };
  const closeEditMode = () => {
    ({ rank, referrer, major, institute, group, grade, intro, uid } =
      $userInfo.applications[0]);
    editMode = false;
  };
  const saveApplicationInfo = () => {
    userInfo.updateInfo({
      rank,
      referrer,
      major,
      institute,
      group,
      grade,
      intro,
    });
    Message.success("保存成功");
    editMode = false;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="h-full w-[60%] mx-auto flex flex-col">
  <p in:fade out:fade class="text-[26px] text-white">个人信息</p>
  <div
    in:fly={{ y: 50, duration: 500, delay: 500 }}
    out:fly={{ y: 50, duration: 500 }}
    class="w-[full] my-[1rem] bg-white rounded-[20px] p-[30px_60px]"
  >
    <div class="flex items-center mb-[1rem]">
      <UserInfoTitle title="基本信息" />
      {#if editMode}
        <div class="ml-auto mt-[1rem] flex gap-[1rem]">
          <Button
            onClick={closeEditMode}
            className="p-[7px_30px] text-sm rounded-full">取消</Button
          >
          <!-- ly: if user applied latest recruitment, "save" button will save info to backend, or will save to localStorage and will not save resume file -->
          <Popover direct="top" style="white">
            <Button
              onClick={saveApplicationInfo}
              slot="children"
              className="p-[7px_30px] text-sm rounded-full"
              highlight>保存</Button
            >
            <p slot="content" class="w-[180px]">
              {$userInfo.applications[0].recruitment_id === $recruitment.uid
                ? "您已报名招新，数据将会保存在服务端"
                : "当前不在招新时间段或您未报名招新，数据将保存在本地（文件不保存）"}
            </p>
          </Popover>

          <!-- ly: if there is any pending recruitment and user didn't apply yet, show "SignUp" button -->
          {#if $recruitment && $recruitment.uid !== $userInfo.applications[0].recruitment_id}
            <Popover style="white" direct="top">
              <Button
                slot="children"
                className="p-[7px_30px] text-sm rounded-full"
                highlight>报名</Button
              >
              <p class="w-[142px]" slot="content">
                您将报名{$recruitment.name}，基本信息，简历，作品集将会上传，请认真填写
              </p>
            </Popover>
          {/if}
        </div>
      {:else}
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
      {/if}
    </div>

    <div class="grid grid-cols-2 mb-[2rem] w-full gap-[2rem]">
      <SingleInputInfo necessary name="姓名" bind:content={$userInfo.name} />
      <SingleSelectInfo
        necessary
        name="性别"
        bind:content={GENDERS[$userInfo.gender - 1]}
        selectItems={GENDERS}
      />
      <SingleSelectInfo
        necessary
        {editMode}
        name="年级"
        bind:content={grade}
        selectItems={GRADE}
      />
      <SingleSelectInfo
        selectItems={colleges}
        {editMode}
        onChange={() => (major = "")}
        necessary
        name="学院"
        bind:content={institute}
      />
      <SingleSelectInfo
        placeholder={majors.length ? "" : "请选择学院"}
        selectItems={majors}
        {editMode}
        necessary
        name="专业"
        bind:content={major}
      />
      <SingleSelectInfo
        {editMode}
        necessary
        name="加权"
        bind:content={rank}
        selectItems={RANK}
      />
      <SingleInputInfo
        {editMode}
        necessary
        name="电话"
        bind:content={$userInfo.phone}
      />
      <SingleInputInfo
        {editMode}
        necessary
        name="邮箱"
        bind:content={$userInfo.email}
      />
      <SingleInputInfo {editMode} name="推荐人" bind:content={referrer} />
      <SingleSelectInfo
        {editMode}
        necessary
        name="意向组别"
        bind:content={Group[group]}
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
          bind:value={intro}
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
        {#if resume}
          <p>{resume.name}</p>
        {/if}
        <div
          class="cursor-pointer border-[1px] border-[#0A84FF] text-[#0A84FF] p-[0.5rem_2rem] hover:bg-[#0A84FF] hover:text-white transition-all rounded-[0.5rem]"
          on:click={() => fileInput.click()}
        >
          {resume ? "重新选择" : "选择文件"}
        </div>
        <input
          on:change={() => {
            resume = fileInput.files[0];
          }}
          bind:this={fileInput}
          type="file"
          class="hidden"
        />
      {:else if $userInfo.applications[0].resume}
        <div
          on:click={downloadResume}
          class="cursor-pointer flex justify-center items-center flex-col gap-[8px]"
        >
          <img src={word} alt="简历" />
          {#await getRecruitmentById($userInfo.applications[0].recruitment_id) then res}
            <p>{res.data.name}-{$userInfo.name}-简历</p>
          {/await}
        </div>
      {:else}
        <p class="font-bold text-lg text-gray-400 select-none">暂无简历</p>
      {/if}
    </div>
  </div>
</div>
