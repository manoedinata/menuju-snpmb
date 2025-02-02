<script setup>
import { onMounted, ref } from "vue";

import Countdown from "@/components/Countdown.vue";

import snbpData from "@/data/snbp.json";

import { getNearestAgendas } from "@/utils/date";

const nearestSNBPAgendas = ref();

onMounted(() => {
  nearestSNBPAgendas.value = getNearestAgendas(snbpData);
});
</script>

<template>
  <div class="mt-5">
    <Countdown
      v-if="nearestSNBPAgendas"
      v-for="agenda in nearestSNBPAgendas"
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
