<script setup>
import { onMounted, ref } from "vue";

import Countdown from "@/components/Countdown.vue";

import snbpData from "@/data/snbp.json";
import snbtData from "@/data/snbt.json";

import { getNearestAgendas } from "@/utils/agenda";

const nearestSNBPAgendas = ref({});
const nearestSNBTAgendas = ref({});

onMounted(() => {
  nearestSNBPAgendas.value = getNearestAgendas(snbpData);
  nearestSNBTAgendas.value = getNearestAgendas(snbtData);
});
</script>

<template>
  <!-- Jadwal SNBP -->
  <div class="mt-5">
    <div class="container mb-3">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h2>Jadwal Terdekat SNBP</h2>
        </div>
      </div>
    </div>
    <Countdown
      v-if="nearestSNBPAgendas.length"
      v-for="agenda in nearestSNBPAgendas"
      :title="agenda.agenda"
      :start="agenda.start"
      :end="agenda.end"
    ></Countdown>
  </div>

  <!-- Jadwal SNBT -->
  <div class="mt-5">
    <div class="container mb-3">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h2>Jadwal Terdekat SNBT</h2>
        </div>
      </div>
    </div>
    <Countdown
      v-if="nearestSNBTAgendas.length"
      v-for="agenda in nearestSNBTAgendas"
      :title="agenda.agenda"
      :start="agenda.start"
      :end="agenda.end"
    ></Countdown>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 mt-3">
        <hr />
        <div class="d-grid gap-2">
          <RouterLink to="/snbp" class="btn btn-outline-light"
            ><strong>Jadwal SNBP</strong> (Seleksi Nasional Berdasarkan
            Prestasi)</RouterLink
          >
          <RouterLink to="/snbt" class="btn btn-outline-light"
            ><strong>Jadwal SNBT</strong> (Seleksi Nasional Berdasarkan
            Tes)</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
