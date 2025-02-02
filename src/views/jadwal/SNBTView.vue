<script setup>
import Countdown from "@/components/Countdown.vue";
import AgendaTable from "@/components/AgendaTable.vue";

import { getNearestAgendas } from "@/utils/agenda";

import snbtData from "@/data/snbt.json";
import { onMounted, ref } from "vue";

const nearestAgendas = ref({});

onMounted(() => {
  nearestAgendas.value = getNearestAgendas(snbtData);
});
</script>

<template>
  <div class="mt-5" v-if="nearestAgendas.length">
    <Countdown
      v-for="agenda in nearestAgendas"
      :title="agenda.agenda"
      :start="agenda.start"
      :end="agenda.end"
    ></Countdown>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 mt-5">
        <h1>Jadwal SNBT</h1>
        <p>
          Sumber:
          <a href="https://snpmb.bppp.kemdikbud.go.id/jadwal-penting"
            >https://snpmb.bppp.kemdikbud.go.id/jadwal-penting</a
          >
        </p>

        <AgendaTable
          :nearest-agendas="nearestAgendas"
          :data="snbtData"
        ></AgendaTable>
      </div>
    </div>
  </div>
</template>
