<script lang="ts">
  import { getJPStandardDateTime, getDay, getCurrentDayStyle, getDoubleDigits } from './dateTime'

  const weekdays: string[] = ['月', '火', '水', '木', '金', '土', '日']
  const dateTime = new Date(getJPStandardDateTime())
  const interval = dateTime.getDay() !== 0 ? dateTime.getDay() : 7

  $: start = new Date(
    dateTime.getFullYear(),
    dateTime.getMonth() + 1,
    dateTime.getDate() - interval + 1,
  )
  $: currentMonth = getDoubleDigits(dateTime.getMonth() + 1)
  $: currentDay = getDoubleDigits(dateTime.getDate())
</script>

<section>
  <div class="date">
    <p>{currentMonth}</p>
    <p>{currentDay}</p>
  </div>
  <div class="calendar">
    <ul>
      {#each weekdays as weekday}
        <li key={weekday}>
          <span>{weekday}</span>
        </li>
      {/each}
    </ul>
    <ul>
      {#each weekdays as weekday, i}
        <li key={weekday}>
          <span class={getCurrentDayStyle(start, i)}>
            {getDay(start, i)}
          </span>
        </li>
      {/each}
    </ul>
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

  /* 横向き */
  @media screen and (orientation: landscape) {
    .date {
      display: none;
    }

    .calendar {
      padding: 0;
      margin: 0 auto;
    }

    .calendar ul {
      display: flex;
      padding: 0;
      margin: 0;
    }

    .calendar li {
      list-style: none;
      width: 4.4em;
      padding: 1.2rem 1.2rem;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .calendar span {
      text-align: center;
      font-size: 2.4em;
    }

    .current {
      padding: 20px;
      background-color: #d93d33;
      color: #fff;
      border-radius: 48px;
    }
  }

  @media screen and (max-width: 896px) {
    .date {
      top: 20%;
      left: 8%;
    }

    .calendar {
      top: 0;
    }
  }

  /* 縦向き */
  @media screen and (orientation: portrait) {
    .date {
      padding: 0;
      margin: 0 auto;
      display: inline-block;
      vertical-align: middle;
      font-size: 12em;
    }

    .date p {
      margin: 0;
    }

    .calendar {
      display: none;
    }
  }
</style>
