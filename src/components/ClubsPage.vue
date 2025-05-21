<template>
  <section class="py-5">
    <b-container>
      <h2 class="mb-4 text-success">Football Clubs</h2>

      <!-- Filter Dropdown -->
      <div class="mb-4 d-flex align-items-center">
        <label for="competitionFilter" class="me-2 fw-semibold">Filter by Competition:</label>
        <select
            id="competitionFilter"
            class="form-select w-auto"
            v-model="selectedCompetition"
        >
          <option value="">All</option>
          <option
              v-for="competition in competitions"
              :key="competition"
              :value="competition"
          >
            {{ competition }}
          </option>
        </select>
      </div>

      <!-- Club Cards -->
      <b-row>
        <b-col
            v-for="club in filteredClubs"
            :key="club.id"
            cols="12"
            md="6"
            lg="4"
            class="mb-4"
        >
          <div class="p-3 shadow rounded bg-light text-start">
            <h5 class="mb-1 text-dark">{{ club.naam }}</h5>
            <p class="mb-0"><strong>Country:</strong> {{ club.land }}</p>
            <p class="mb-0"><strong>Competition:</strong> {{ club.competitie }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { BContainer, BRow, BCol } from 'bootstrap-vue-next';
import axios from 'axios';

const clubs = ref([]);
const selectedCompetition = ref('');
const competitions = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/clubs');
    clubs.value = response.data;

    // Extract unique competitions for filter dropdown
    competitions.value = [...new Set(clubs.value.map(club => club.competitie))];
  } catch (error) {
    console.error('Error fetching clubs:', error);
  }
});

const filteredClubs = computed(() => {
  if (!selectedCompetition.value) {
    return clubs.value;
  }
  return clubs.value.filter(club => club.competitie === selectedCompetition.value);
});
</script>
