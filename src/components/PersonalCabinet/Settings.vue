<template>
<div class="container">
  <h3 class="text h3">Настройки</h3>
  <div class="top">
    <h3 class="text p">Мой данные</h3>
    <input class="input input-mid" type="text" placeholder="Имя">
    <input class="input input-mid input-change" type="text" placeholder="Фамилия">
    <input class="input input-mid input-change" type="text" placeholder="Возраст">
    <br>
    <input class="b-mt input input-mid" type="tel" placeholder="Номер">
    <input class="b-mt input input-mid input-change" type="email" placeholder="E-mail">
    <input class="b-mt input input-mid input-change" type="text" placeholder="Город">
    <br>
    <input class="b-mt input input-school" type="text" placeholder="Школа">
    <button class="btn">Сохранить</button>
  </div>

  <div class="middle">
    <h3 class="text p">Изменить пароль</h3>
    <input class="input" type="password" placeholder="Старый пароль">
    <input class="input input-password" type="password" placeholder="Новый пароль">
    <input class="input input-password" type="password" placeholder="Новый пароль">
    <button class="btn">Сохранить</button>
  </div>

  <div class="bottom">
    <h3 class="text p">История покупок</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Название курса</th>
          <th>Дата</th>
          <th>Цена</th>
          <th>Срок годности</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="v-text">Premium</td>
          <td>Математика и наука о данных</td>
          <td>22.03.2022</td>
          <td>63 000₸</td>
          <td>6 месяцев</td>
        </tr>

        <tr>
          <td class="v-text">Standard</td>
          <td>Математика и наука о данных</td>
          <td>22.03.2022</td>
          <td>63 000₸</td>
          <td>6 месяцев</td>
        </tr>

        <tr>
          <td class="v-text">light</td>
          <td>Математика и наука о данных</td>
          <td>22.03.2022</td>
          <td>47 500₸</td>
          <td>6 месяцев</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>
.container {
  background: #DFF3FF;
  width: 1241px;
  padding: 73px 35px;
}

.input {
  padding: 18px 22px;
  background: #FFFFFF;
  border-radius: 83px;
  border-style: none;
  color: #062060;
  font-weight: 600;
  font-size: 14px;
}

.btn {
  padding: 13px 26px;
  font-weight: 500;
  color: #062060;
  font-size: 16px;
  border-radius: 44px;
  border: 2px solid #062060;
}

.text {
  color: #062060;
}

.v-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotateZ(180deg);
  font-weight: 500;
  font-size: 16px;
}

.h3 {
  font-weight: 700;
  font-size: 28px;
}

.p {
  font-weight: 600;
  font-size: 25px;
}

.input-change {
  margin-left: 25px;
}

.input-mid {
  width: 18%;
}

.b-mt {
  margin-top: 15px;
}

.input-school {
  width: 66%;
}

.input-password {
  margin-left: 20px;
}

table {
  width: 80%;
}

th, td {
  border-bottom: 1px solid #ddd;
}

tr {
  background: #CFE5F9;
  color: #062060;
}

th {
  font-weight: 500;
  font-size: 16px;
}

td {
  font-weight: 600;
  font-size: 18px;
}

tr:hover {
  background-color: #333;
}
</style>