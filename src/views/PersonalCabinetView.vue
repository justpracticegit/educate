<template>
<div class="personal-cab">
  <div class="container mathandscience">
    <div class="mathandsciencetop">
        <div class="mathandscienceleft">
            <p><span><img src="@/assets/img/back.png" alt=""></span>Назад</p>
            <h2>Математика и наука оданных</h2>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              <br>Lorem Ipsum является стандартной "рыбой" для текстов на латинице
              <br>с начала XVI века.  В то время некий безымянный печатник
              <br>создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum
              <br>для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных
              <br>изменений пять веков, но и перешагнул в электронный дизайн.
            </p>
        </div>
        <div class="mathandscienceright">
          <img src="@/assets/img/MathandScience.png">
        </div>
    </div>
    <div class="mathandsciencebottom">
        <h2>Содержание курса</h2>
        <ol class="syntaxlanguage">
           <router-link to="/perscabinet1">
          <li>Вводный модуль</li>
            </router-link>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
          <li>Синтаксис языка — часть 1</li>
        </ol>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PersonalCabinetView"
}
</script>

<style scoped>
.personal-cab{
  padding-top: 120px;
  background: #DFF3FF;
  box-shadow: 0px 4px 84px rgba(137, 213, 255, 0.3);
}
.mathandsciencetop{
  display: flex;
  justify-content: space-between;
}
.mathandscienceright img{
  width: 80%;
}
.mathandsciencebottom{
  margin-left: 40%;
}
.syntaxlanguage li{
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 24px;
  font-weight: 700; 
  color: #062060;
}
</style>