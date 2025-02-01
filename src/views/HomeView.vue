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
        <div class="dropdown">
          <button
            class="btn btn-lg btn-outline-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            <strong>Rangkaian Jadwal SNPMB</strong>
          </button>
          <ul class="dropdown-menu">
            <li>
              <RouterLink to="/snbp" class="dropdown-item"
                >SNBP (Seleksi Nasional Berdasarkan Prestasi)</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/snbt" class="dropdown-item"
                >SNBT (Seleksi Nasional Berdasarkan Tes)</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
