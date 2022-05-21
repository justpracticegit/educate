<template>
  <div class="tabs">
    <ul class="tabs-header">
      <li v-for="title in tabTitles"
          :key="title"
          :class="{ selected: title === selectedTitle }"
          @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot/>
  </div>
</template>

<script>
import { ref, provide } from 'vue'

export default {
  name: "Tabs",
  setup (props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])

    provide('selectedTitle', selectedTitle)
    return {
      selectedTitle,
      tabTitles,
    }
  },
}
</script>

<style scoped>
.tabs {
  margin: 0 auto;
}
.tabs-header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
}
.tabs-header li {
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 44px;
  cursor: pointer;
  transition: .4s all ease-out;
}
.tabs-header li.selected {
  background-color: #00E191;
  color: #fff;
}
</style>