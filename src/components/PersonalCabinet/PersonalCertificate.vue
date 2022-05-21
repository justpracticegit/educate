<template>
    <div class="top">
      <img src="@/assets/img/certificate.png" alt="">
    </div>
    <div class="bottom">
      <button class="btn">Скачать PDF вариант</button>
      <button class="btn btn-send">Отправить на почту</button>
      <router-link to="/personal-courses">
        <p class="a btn-course">Перейти на страницу курса</p>
      </router-link>
    </div>
</template>

<script>
export default {
  name: "PersonalCertificate"
}
</script>

<style scoped>
.btn {
  background: #F96A38;
  color: #fff;
  border-radius: 44px;
  padding: 16px 46px;
  font-size: 16px;
  font-weight: 600;
  border-style: none;
}

.a {
  color: #F96A38;
  font-size: 16px;
  font-weight: 600;
}

.bottom {
  margin-top: 50px;
  display: flex;
}

.btn-send, .btn-course {
  margin-left: 18px;
}
</style>