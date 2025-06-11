<template>
  <div>
    <div class="search-bar-container mt-4 mb-4">
      <input
          type="text"
          v-model="zoekterm"
          placeholder="Search for a player..."
          class="form-control"
      />
    </div>

    <div class="grid-container">
      <div
          v-for="speler in paginatedSpelers"
          :key="speler.id"
          class="card"
      >
        <h5>{{ speler.naam }}</h5>
        <p><strong>Position:</strong> {{ speler.positie || 'Onbekend' }}</p>
        <p><strong>Club:</strong> {{ speler.club ? speler.club.naam : 'Geen club' }}</p>
        <div class="text-center mt-2">
          <router-link
              :to="`/players/${speler.id}`"
              class="btn btn-success btn-sm"
          >
            Show Details
          </router-link>
        </div>
      </div>
    </div>

    <div class="pagination-buttons mt-4">
      <button
          class="btn btn-secondary"
          :disabled="currentPage === 1"
          @click="previousPage"
      >
        Previous
      </button>
      <button
          class="btn btn-secondary"
          :disabled="currentPage === totalPages"
          @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      spelers: [],
      zoekterm: '',
      currentPage: 1,
      itemsPerPage: 20,
    };
  },
  computed: {
    gefilterdeSpelers() {
      const zoek = this.zoekterm.toLowerCase();
      return this.spelers.filter(speler =>
          speler.naam.toLowerCase().includes(zoek)
      );
    },
    paginatedSpelers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.gefilterdeSpelers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.gefilterdeSpelers.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  created() {
    axios
        .get('http://127.0.0.1:8000/api/spelers')
        .then(response => {
          this.spelers = response.data;
        })
        .catch(err => console.error('Fout bij ophalen spelers:', err));
  },
};
</script>

<style scoped>
.search-bar-container {
  padding: 0 1rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
}

.card {
  background-color: white;
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 0.075);
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2px solid green;
}

.card h5 {
  margin-bottom: 0.5rem;
}

.card p {
  margin-bottom: 0.5rem;
  flex-grow: 1;
}

.btn {
  align-self: flex-start;
}

.pagination-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>