<template>
  <section class="py-5">
    <b-container>
      <h2 class="mb-4 text-success">Football Clubs</h2>

      <!-- Filter Dropdown -->
      <div class="mb-4 d-flex align-items-center flex-wrap flex-md-nowrap">
        <label for="competitionFilter" class="me-2 fw-semibold">Filter by Competition:</label>
        <select
            id="competitionFilter"
            class="form-select competition-select"
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
          <div class="club-card p-3 shadow rounded bg-light text-start">
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

    // Extract unique competitions
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

<style scoped>
.club-card {
  border: 2px solid green;
  transition: transform 0.2s;
}

.club-card:hover {
  transform: translateY(-3px);
}

/* Responsive dropdown styling */
.competition-select {
  width: auto;
  min-width: 150px;
}

@media (max-width: 768px) {
  .competition-select {
    width: 50%;
    margin-top: 10px;
  }

  .d-flex {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
