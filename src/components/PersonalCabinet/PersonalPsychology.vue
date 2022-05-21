<template>
  <div class="container-psy">
      <div class="left">
        <img src="@/assets/img/psychology.svg" alt="">
      </div>
      <div class="right">
        <h3 class="text h3">Сфера умственного труда</h3>
        <p class="text p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloribus ea excepturi minima quia, voluptates?</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "PersonalPsychology"
}
</script>

<style scoped>
.container-psy {
  display: flex;
}
.right {
  margin-left: 20px;
}
.text {
  color: #062060;
}
.h3 {
  font-weight: 700;
  font-size: 28px;
}
.p {
  font-weight: 500;
  font-size: 18px;
  width: 50%;
}
</style>