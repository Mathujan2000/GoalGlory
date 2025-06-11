<script setup>
import { defineAsyncComponent } from 'vue';

const AppHeader = defineAsyncComponent(() =>
    import('./components/AppHeader.vue')
);

const AppFooter = defineAsyncComponent(() =>
    import('./components/AppFooter.vue')
);
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <section>
        <router-view />
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>