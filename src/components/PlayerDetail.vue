<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
    <b-card v-if="speler" class="w-100 shadow" style="max-width: 600px;">
      <h3 class="mb-4 text-success text-center">{{ speler.naam }}</h3>

      <ul class="list-unstyled mb-4">
        <li class="mb-2">
          <strong>Age:</strong> {{ speler.leeftijd || 'Onbekend' }}
        </li>
        <li class="mb-2">
          <strong>Position:</strong> {{ speler.positie || 'Onbekend' }}
        </li>
        <li>
          <strong>Club:</strong> {{ speler.club ? speler.club.naam : 'Geen club' }}
        </li>
      </ul>

      <div class="text-center">
        <router-link to="/players" class="btn btn-outline-success">
          ← Back to Players
        </router-link>
      </div>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';
import { BCard } from 'bootstrap-vue-next';

export default {
  name: 'PlayerDetail',
  components: { BCard },
  data() {
    return {
      speler: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    axios
        .get(`http://127.0.0.1:8000/api/spelers/${id}`)
        .then(response => {
          this.speler = response.data;
        })
        .catch(error => {
          console.error('Fout bij ophalen speler:', error);
        });
  },
};
</script>