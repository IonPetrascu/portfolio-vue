<script lang="ts" setup>

import BannerComponent from '@/components/BannerComponent.vue';
import TechStackComponent from '@/components/TechStackComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
</script>

<template>
    <main>
      <BannerComponent/>
      <TechStackComponent/>
      <ProjectsComponent/>
    </main>
</template>

<style scoped>
h2{
color:var(--gray);
}
</style>
