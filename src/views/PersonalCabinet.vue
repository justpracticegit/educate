<template>
  <div class="personal-cabinet">
    <Sidebar />
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "@/components/PersonalCabinet/Dashboard";
import Sidebar from "@/components/PersonalCabinet/Sidebar";
export default {
  name: "PersonalCabinet",
  components: {Sidebar, Dashboard}
}
</script>

<style scoped>
.personal-cabinet {
  display: flex;
  margin-top: 90px;
}
</style>