<script setup>
import Countdown from "@/components/Countdown.vue";

import { getNearestAgendas, formatDate } from "@/utils/date";

import snbpData from "@/data/snbp.json";
import { onMounted, ref } from "vue";

const nearestAgendas = ref();

onMounted(() => {
  nearestAgendas.value = getNearestAgendas(snbpData);
});
</script>

<template>
  <div class="mt-5" v-if="nearestAgendas">
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
        <h1>Jadwal SNBP</h1>
        <p>
          Sumber:
          <a href="https://snpmb.bppp.kemdikbud.go.id/jadwal-penting"
            >https://snpmb.bppp.kemdikbud.go.id/jadwal-penting</a
          >
        </p>

        <div class="table-responsive">
          <table class="table table-striped mt-3">
            <thead class="table-light">
              <tr>
                <th scope="col">Agenda</th>
                <th scope="col">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in snbpData">
                <td>{{ data.agenda }}</td>
                <td>
                  {{
                    data.end
                      ? `${formatDate(data.start)} - ${formatDate(data.end)}`
                      : formatDate(data.start)
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
