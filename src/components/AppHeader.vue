<script setup>
import logo from '@/assets/GoalGlory.webp';
import AppNavbar from './AppNavbar.vue';
import { BButton, BContainer } from 'bootstrap-vue-next';
</script>

<template>
  <header class="bg-success py-3" role="banner">
    <BContainer fluid>
      <div class="d-flex align-items-center justify-content-between">
        <div class="logo-container">
          <img
              :src="logo"
              alt="GoalLine logo"
              class="header-logo"
              width="100"
              height="120"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
          />
        </div>
        <div class="d-flex align-items-center ms-auto">
          <AppNavbar />
          <BButton variant="success" class="fw-bold ms-3 px-4 text-white" aria-label="Join GoalLine football club">JOIN</BButton>
        </div>
      </div>
    </BContainer>
  </header>
</template>

<style scoped>
.header-logo {
  height: 120px;
}

@media (max-width: 768px) {
  .logo-container {
    justify-content: center;
    width: auto;
  }
}
</style>
