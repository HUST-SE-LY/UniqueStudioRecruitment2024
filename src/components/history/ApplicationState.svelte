<script lang="ts">
  import { ProcessState } from "../../config/const";
  import cx from 'clsx';
  export let state:ProcessState
</script>

<div class={cx([
  state === ProcessState.OUT && 'bg-gray-red text-red-warning border-red-warning',
  state === ProcessState.PROCESSING && 'bg-gray-blue text-blue-400 border-blue-400',
  state === ProcessState.PASS && 'bg-gray-green text-green-300 border-green-300',
  'border-1 px-[1rem] w-fit rounded-full'
])}>{state}</div>