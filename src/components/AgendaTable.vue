<script setup>
import { formatDate } from "@/utils/date";
import { agendaIsNear } from "@/utils/agenda";

defineProps({
  nearestAgendas: String,
  data: Array,
});
</script>

<template>
  <div class="table-responsive">
    <table class="table table-striped mt-3">
      <thead class="table-light">
        <tr>
          <th scope="col">Agenda</th>
          <th scope="col">Tanggal</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in data"
          :class="
            agendaIsNear(nearestAgendas, [data]) ? 'table-success fw-bold' : ''
          "
        >
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
</template>
