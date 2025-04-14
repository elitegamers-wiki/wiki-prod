<script setup>
import { useData } from 'vitepress'
import Sitemap from '../components/Sitemap.vue'

const { page } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <Sitemap v-if="page.relativePath === 'index.md'" />
    </template>
  </DefaultTheme.Layout>
</template>
