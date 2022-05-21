<template>
<div class="container">
  <div class="top">
      <Tabs>
        <Tab title="Курсы">
          <PersonalCourses/>
        </Tab>
        <Tab title="Психологический профиль">
          <PersonalPsychology/>
        </Tab>
        <Tab title="Сертификаты">
          <PersonalCertificate/>
        </Tab>
        <Tab title="Домашнее задание/Тесты">
          <PersonalHomework/>
        </Tab>
      </Tabs>
  </div>
</div>
</template>

<script>
import Tabs from '@/components/PersonalCabinet/Tabs'
import Tab from "@/components/PersonalCabinet/Tab";
import PersonalCourses from "@/components/PersonalCabinet/PersonalCourses";
import PersonalPsychology from "@/components/PersonalCabinet/PersonalPsychology";
import PersonalCertificate from "@/components/PersonalCabinet/PersonalCertificate";
import PersonalHomework from "@/components/PersonalCabinet/PersonalHomework";

export default {
  name: "Dashboard",
  components: {
    PersonalHomework,
    PersonalCertificate,
    PersonalPsychology,
    PersonalCourses,
    Tab,
    Tabs
  }
}
</script>

<style scoped>
.container {
  background: #DFF3FF;
  width: 1241px;
  padding: 73px 35px;
}

.btn {
  background: #fff;
  border-radius: 44px;
  padding: 8px 26px;
  font-size: 18px;
  font-weight: 700;
  border-style: none;
}

.btn-courses {
  background: #00E191;
  color: #fff;
}

.btn-psy-profile {
  color: #6E718F;
}

.btn-certificate {
  color: #6E718F;
}

.btn-homework {
  color: #6E718F;
}
</style>
