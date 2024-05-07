<script lang="ts">
  import { fade, fly, slide } from "svelte/transition";
  import UserInfoTitle from "../components/user/UserInfoTitle.svelte";
  import SingleInputInfo from "../components/user/SingleInputInfo.svelte";
  import SingleSelectInfo from "../components/user/SingleSelectInfo.svelte";
  import edit from "/src/assets/edit.svg";
  import cx from "clsx";
  import Button from "../components/public/Button.svelte";
  import word from "../assets/word.svg";
  import { DEPARTMENTS, GENDERS, GRADE, Group, RANK } from "../config/const";
  import type { College } from "../types";
  import { userInfo } from "../stores/userInfo";
  import { getRecruitmentById } from "../requests/recruitment/getById";
  import { getResume } from "../requests/user/getResume";
  import { recruitment } from "../stores/recruitment";
  import Popover from "../components/public/Popover.svelte";
  import { Message } from "../utils/Message";
  import { latestInfo } from "../stores/latestApplication";
  import Modal from "../components/public/Modal.svelte";
  import { checkNecessaryInfo } from "../utils/checkNecessaryInfo";
  import { signUpRecruitment } from "../requests/application/signUpRecruitment";
  import { updateApplication } from "../requests/application/updateApplication";
  import { parseTitle } from "../utils/parseTitle";
  import { t } from "../utils/t";
  let editMode = false;
  let colleges = Object.keys(DEPARTMENTS);
  let showSignUpModal = false;
  let resume: File;
  let fileInput: HTMLInputElement;
  let { rank, referrer, major, institute, group, grade, intro, uid } =
    $latestInfo;
  //ly:this asset would be wrong but I just don't want to see TypeError :)
  $: majors = DEPARTMENTS[institute as College] || [];
  const downloadResume = () => {
    getResume(uid);
  };
  const closeEditMode = () => {
    ({ rank, referrer, major, institute, group, grade, intro, uid } =
      $latestInfo);
    editMode = false;
  };
  const signUp = () => {
    if (!checkNecessaryInfo({ rank, major, institute, group, grade, intro }))
      return;
    const formData = new FormData();
    formData.append("recruitment_id", $recruitment.uid);
    resume && formData.append("resume", resume);
    for (const [key, value] of Object.entries({
      rank,
      major,
      institute,
      group,
      grade,
      intro,
      referrer,
    })) {
      formData.append(key, value);
    }
    signUpRecruitment(formData).then(() => {
      Message.success("报名成功 ");
      showSignUpModal = false;
    });
  };
  const saveApplicationInfo = async () => {
    if (!checkNecessaryInfo({ rank, major, institute, group, grade, intro }))
    return;
    if ($recruitment && $recruitment.uid === $userInfo.applications[0].recruitment_id) {
      const formData = new FormData();
      formData.append("recruitment_id", $recruitment.uid);
      resume && formData.append("resume", resume);
      for (const [key, value] of Object.entries({
        rank,
        major,
        institute,
        group,
        grade,
        intro,
        referrer,
      })) {
        formData.append(key, value);
      }
      await updateApplication($userInfo.applications[0].uid, formData);
    }
    latestInfo.updateInfo({
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
  <p transition:fade class="text-[26px] text-white">{$t('user.selfInfo')}</p>
  <div
    in:fly={{ y: 50, duration: 500, delay: 500 }}
    out:fly={{ y: 50, duration: 500 }}
    class="w-[full] my-[1rem] bg-white rounded-[20px] p-[30px_60px]"
  >
    <div class="flex items-center mb-[1rem]">
      <UserInfoTitle title={$t('user.basicInfo')} />
      {#if editMode}
        <div class="ml-auto mt-[1rem] flex gap-[1rem]">
          <Button
            onClick={closeEditMode}
            className="p-[7px_30px] text-sm rounded-full">{$t('user.cancel')}</Button
          >
          <!-- ly: if user applied latest recruitment, "save" button will save info to backend, or will save to localStorage and will not save resume file -->
          <Popover direct="top" style="white">
            <Button
              onClick={saveApplicationInfo}
              slot="children"
              className="p-[7px_30px] text-sm rounded-full"
              highlight>{$t('user.save')}</Button
            >
            <p slot="content" class="w-[180px]">
              {$userInfo.applications[0].recruitment_id === $recruitment.uid
                ? $t('user.saveTips')
                : $t('user.saveTips1')}
            </p>
          </Popover>

          <!-- ly: if there is any pending recruitment and user didn't apply yet, show "SignUp" button -->
          {#if $recruitment && $recruitment.uid !== $userInfo.applications[0].recruitment_id}
            <Popover style="white" direct="top">
              <Button
                onClick={() => (showSignUpModal = true)}
                slot="children"
                className="p-[7px_30px] text-sm rounded-full"
                highlight>{$t('user.signUp')}</Button
              >
              <p class="w-[142px]" slot="content">
                {$t('user.signUpConfirm', {
                  recruitment: $parseTitle($recruitment.name),
                })}
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
          <p class="text-blue-300">{$t('user.edit')}</p>
        </div>
      {/if}
    </div>

    <div class="grid grid-cols-2 mb-[2rem] w-full gap-[2rem]">
      <SingleInputInfo necessary name={$t('user.name')} bind:content={$userInfo.name} />
      <SingleSelectInfo
        necessary
        name={$t('user.gender')}
        bind:content={GENDERS[$userInfo.gender - 1]}
        selectItems={GENDERS}
      />
      <SingleSelectInfo
        necessary
        {editMode}
        name={$t('user.grade')}
        bind:content={grade}
        selectItems={GRADE}
      />
      <SingleSelectInfo
        selectItems={colleges}
        {editMode}
        onChange={() => (major = "")}
        necessary
        name={$t('user.college')}
        bind:content={institute}
      />
      <SingleSelectInfo
        placeholder={majors.length ? "" : "请选择学院"}
        selectItems={majors}
        {editMode}
        necessary
        name={$t('user.major')}
        bind:content={major}
      />
      <SingleSelectInfo
        {editMode}
        necessary
        name={$t('user.rank')}
        bind:content={rank}
        selectItems={RANK}
      />
      <SingleInputInfo necessary name={$t('user.phone')} bind:content={$userInfo.phone} />
      <SingleInputInfo necessary name={$t('user.email')} bind:content={$userInfo.email} />
      <SingleInputInfo {editMode} name={$t('user.recommender')} bind:content={referrer} />
      <SingleSelectInfo
        editMode={ editMode && (!$recruitment || $userInfo.applications[0].recruitment_id !== $recruitment.uid) }
        necessary
        name={$t('user.group')}
        content={Group[group]}
        onChange={(item) => (group = item.toLowerCase())}
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
        <p class="shrink-0 opacity-50 mt-[0.75rem]">*{$t('user.selfIntro')}</p>
        <textarea
          bind:value={intro}
          disabled={!editMode}
          placeholder={$t('user.placeholder')}
          class="w-full transition-all outline-none border-transparent border-[1px] focus:border-[#165DFF] resize-none rounded-[8px] p-[0.75rem_1rem] bg-[#FAFAFA] h-[10rem]"
        />
      </div>
    </div>
    <div class="w-full h-[1px] mb-[2rem] bg-[#E5E6EB]" />
    <Popover direct="top" style="white">
      <UserInfoTitle slot="children" title={$t("user.attachment")} />
      <p slot="content" class="w-[102px]">
        {$t('user.resumePopover')}
      </p>
    </Popover>

    <div
      class="flex justify-center bg-[#FAFAFA] rounded-[1rem] py-[2rem] items-center flex-col gap-[1rem]"
    >
      {#if editMode}
        <p class="font-bold text-lg">{$t('user.upload')}</p>
        {#if resume}
          <p>{resume.name}</p>
        {/if}
        <div
          class="cursor-pointer border-[1px] border-[#0A84FF] text-[#0A84FF] p-[0.5rem_2rem] hover:bg-[#0A84FF] hover:text-white transition-all rounded-[0.5rem]"
          on:click={() => fileInput.click()}
        >
          {resume ? $t('user.reselect') : $t("user.select")}
        </div>
        <input
          on:change={() => {
            resume = fileInput.files[0];
          }}
          bind:this={fileInput}
          type="file"
          class="hidden"
        />
      {:else if $recruitment && $userInfo.applications[0].recruitment_id === $recruitment.uid && $userInfo.applications[0].resume}
        <div
          on:click={downloadResume}
          class="cursor-pointer flex justify-center items-center flex-col gap-[8px]"
        >
          <img src={word} alt="简历" />
          {#await getRecruitmentById($userInfo.applications[0].recruitment_id) then res}
            <p>{$parseTitle(res.data.name)}-{$userInfo.name}-{$t('user.resume')}</p>
          {/await}
        </div>
      {:else}
        <p class="font-bold text-lg text-gray-400 select-none">{$t('user.noResume')}</p>
      {/if}
    </div>
    <Modal
      className="w-[524px] flex flex-col gap-[1rem] text-center p-[20px_20px]"
      visible={showSignUpModal}
      onCancel={() => (showSignUpModal = false)}
    >
      <p>{$t('user.signUpTips')}{$parseTitle($recruitment.name)}</p>
      <p>{$t('user.signUpTips1')}</p>
      <div class="flex gap-[1rem] justify-center">
        <Button
          onClick={signUp}
          highlight
          className="p-[7px_30px] text-sm rounded-full">{$t('user.signUp')}</Button
        >
        <Button
          onClick={() => (showSignUpModal = false)}
          className="p-[7px_30px] text-sm rounded-full">{$t('user.cancel')}</Button
        >
      </div>
    </Modal>
  </div>
</div>
