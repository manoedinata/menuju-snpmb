<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  title: String,
  start: String,
  end: String,
});

const background = ref("");
const selectedDate = ref();
const months = ref("00");
const weeks = ref("00");
const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

function updateCountdown(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) return;

  months.value = String(
    Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
  ).padStart(2, "0");
  weeks.value = String(
    Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
    )
  ).padStart(2, "0");
  days.value = String(
    Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24))
  ).padStart(2, "0");
  hours.value = String(
    Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  minutes.value = String(
    Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  seconds.value = String(
    Math.floor((difference % (1000 * 60)) / 1000)
  ).padStart(2, "0");
}

function startCountdown() {
  const d = new Date(props.end); // date is from vue props
  setInterval(() => updateCountdown(d), 1000);
}

onMounted(() => {
  const d = new Date();
  const startDate = new Date(props.start);
  const endDate = new Date(props.end);

  if (d.getTime() <= startDate.getTime() && d.getTime() <= endDate.getTime()) {
    background.value = "primary";
    selectedDate.value = startDate;
  } else if (
    d.getTime() >= startDate.getTime() &&
    d.getTime() <= endDate.getTime()
  ) {
    background.value = "success";
    selectedDate.value = endDate;
  } else {
    background.value = "danger";
    selectedDate.value = null;
  }

  // Start countdown
  const targetDate = new Date(selectedDate.value); // date is from vue props
  updateCountdown(targetDate);
  setInterval(() => updateCountdown(targetDate), 1000);
});
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div :class="['card-header', `bg-${background}`, `text-white`]">
            <h4 class="mb-0 text-center">{{ title }}</h4>
          </div>
          <div class="card-body">
            <div class="row text-center">
              <div class="col-4 col-lg-2">
                <h3 id="days" class="display-4">{{ months }}</h3>
                <p>Bulan</p>
              </div>
              <div class="col-4 col-lg-2">
                <h3 id="days" class="display-4">{{ weeks }}</h3>
                <p>Minggu</p>
              </div>
              <div class="col-4 col-lg-2">
                <h3 id="days" class="display-4">{{ days }}</h3>
                <p>Hari</p>
              </div>
              <div class="col-4 col-lg-2">
                <h3 id="hours" class="display-4">{{ hours }}</h3>
                <p>Jam</p>
              </div>
              <div class="col-4 col-lg-2">
                <h3 id="minutes" class="display-4">{{ minutes }}</h3>
                <p>Menit</p>
              </div>
              <div class="col-4 col-lg-2">
                <h3 id="seconds" class="display-4">{{ seconds }}</h3>
                <p>Detik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
