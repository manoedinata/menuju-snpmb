<script setup>
import Countdown from "@/components/Countdown.vue";
import AgendaTable from "@/components/AgendaTable.vue";

import { getNearestAgendas } from "@/utils/agenda";

import snbpData from "@/data/snbp.json";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const agendas = ref({});

onMounted(() => {
  if (route.params.id) {
    agendas.value = Array(snbpData[parseInt(route.params.id) - 1]);
  } else {
    agendas.value = getNearestAgendas(snbpData);
  }
});
</script>

<template>
  <div class="mt-5" v-if="agendas.length">
    <Countdown
      v-for="agenda in agendas"
      :title="agenda.agenda"
      :start="agenda.start"
      :end="agenda.end"
    ></Countdown>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 mt-5">
        <h1>Jadwal SNBP</h1>
        <p>
          Sumber:
          <a href="https://snpmb.bppp.kemdikbud.go.id/jadwal-penting"
            >https://snpmb.bppp.kemdikbud.go.id/jadwal-penting</a
          >
        </p>

        <AgendaTable
          :nearest-agendas="agendas"
          :data="snbpData"
          type="snbp"
        ></AgendaTable>
      </div>
    </div>
  </div>
</template>
