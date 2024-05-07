<script lang="ts">
  import { InterviewPlace } from "../../../config/const";
  import { t } from "../../../utils/t";

  export let time:string;
  export let group:string;
</script>

<p>
  {@html $t('history.stressTest.tips', {
    time: `<span class="text-blue-300">${time}</span>`,
    room: `<span class="text-blue-300">${InterviewPlace[group]}</span>`,
    group,
  })}
</p>
