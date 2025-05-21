<script setup>
import logo from '@/assets/GoalGlory.png'; // adjust path if needed
import { BContainer, BButton } from 'bootstrap-vue-next';
import AppNavbar from './AppNavbar.vue';
</script>

<template>
  <header class="bg-success py-3">
    <b-container fluid>
      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <div class="d-flex align-items-center mb-2 mb-md-0">
          <img
              :src="logo"
              alt="GoalLine logo"
              class="me-2"
              width="80"
              height="100"
          />
        </div>
        <div class="d-flex align-items-center ms-auto">
          <AppNavbar />
          <b-button variant="light" class="fw-bold ms-3 px-4 text-success">JOIN</b-button>
        </div>
      </div>
    </b-container>
  </header>
</template>
