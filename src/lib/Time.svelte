<script lang="ts">
  import { getDoubleDigits } from './dateTime'

  export let time

  $: currentHour = getDoubleDigits(time.getHours())
  $: currentMinute = getDoubleDigits(time.getMinutes())
  $: currentSecond = getDoubleDigits(time.getSeconds())
</script>

<section>
  <div class="second">
    {`${currentHour}:${currentMinute}:${currentSecond}`}
  </div>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    height: 100%;
    min-height: 100vh;
  }

  .second {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    font-variant-numeric: tabular-nums;
  }

  @media screen and (max-width: 896px) {
    .second {
      font-size: 4rem;
    }
  }
</style>
