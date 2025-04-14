<script setup>
import { useData } from 'vitepress'

const { site } = useData()
const sidebar = site.value.themeConfig.sidebar || []

function flattenSidebarItems(section) {
  if (!section.items) return []

  const flat = []

  for (const item of section.items) {
    if (item.items) {
      flat.push(...flattenSidebarItems(item)) 
    } else {
      flat.push(item) 
    }
  }

  return flat
}

const items = sidebar.map(section => ({
  text: section.text,
  items: flattenSidebarItems(section)
})).filter(section => section.items.length > 0) 
</script>


<template>
  <section id="sitemap">
    <div class="container">
      <div class="sitemap-col" v-for="col in items" :key="col.text">
        <h4>{{ col.text }}</h4>
        <ul>
          <li v-for="item in col.items" :key="item.link">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
#sitemap {
  background: var(--vt-c-bg-soft);
}

#sitemap .container {
  max-width: 900px;
  margin: auto;
  columns: 1;
  padding: 24px 32px;
}

@media (min-width: 768px) {
  #sitemap .container {
    columns: 2;
  }
}

@media (min-width: 1024px) {
  #sitemap .container {
    columns: 3;
  }
}

#sitemap h4 {
  font-weight: 500;
  color: var(--vt-c-text-1);
  margin-bottom: 0.25em;
}

.sitemap-col {
  margin-bottom: 2em;
  break-inside: avoid;
}

#sitemap .vt-link {
  font-size: 0.9em;
  color: var(--vt-c-text-2);
}
</style>