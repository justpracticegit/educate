<template>
<div class="trashcloud">
    <div class="trash">
        <div class="container trashbar">
            <p>Корзина</p>
            <div class="namecourse">
                <p>Название курса</p>
                <p>Цена</p>
            </div>
            <div class="trashborder">
                <p>Математика и наука  о данных</p>
                <p>47 500₸</p>
            </div>
            <div class="trashborderbottom">
                <p>Математика и наука  о данных</p>
            </div>
            <div class="box">
            <h1>Использовать купон</h1>
            <form type="text">
                <input type="text" name="" placeholder="Введите код купона">
                <input type="submit" name="" value="Применить">
            </form>
            </div>
            <div class="coursecoupn">
                <p>Курсы:</p>
                <p>44 500 ₸</p>
            </div>
            <div class="result">
                <p>Итого:</p>
                <p>44 500 ₸</p>
            </div>
            <router-link to="/trashspremium">
                <button class="btnpay">Оплатить</button>
            </router-link>
        </div>
    </div>
</div>
</template>
<style scoped>
.trashcloud{
    height: 1000px;;
    transform: translate(10px, -200px);
    background: url(@/assets/img/trashcloud1.png) no-repeat left top,
                url(@/assets/img/trashcloud3.png) no-repeat center 50%,
                url(@/assets/img/trashcloud2.png) no-repeat right top;
}
.trash{
    transform: translate(10px, 225px); 
}
.trashbar{
    margin-top: 335px;
}
.trashbar p{
    text-align: center;
}
.namecourse{
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 22%;
    margin-bottom: -5%;
}
.trashborder{
    display: flex;
    justify-content: space-between;
    margin-left: 22%;
    margin-top: 81px;
    width: 60%;
    padding: 10px;
    background-color: #D1E8FF;
    border-top: 1px solid #CADEF0;
    border-bottom: 1px solid #CADEF0;
}
.trashborderbottom{
    display: flex;
    justify-content: space-between;
    margin-left: 22%;
    margin-top: 11px;
    width: 60%;
    padding: 10px;
    background-color: #D1E8FF;
    border-top: 1px solid #CADEF0;
    border-bottom: 1px solid #CADEF0;
}
.box h1{
    margin:0 0 10px;
    padding: 0;
    color: #062060;
    font-size: 24px;
}
.box
{
    position: absolute;
    top:58%;
    left:39%;
    width: 500px;
    transform: translate(-50%,-50%);
}
input
{
    position: relative;
    display: inline-block;
    font-size: 20px;
    transition: .5s;
}
input[type="text"]
{
    background: #fff;
    width: 828px;
    height: 50px;
    border: none;
    outline: none;
    padding: 0 25px;
    border-radius: 25px 0 0 25px;
    margin-top: 15px;
}
input[type="submit"]
{
    position: relative;
    left: 750px;
    border-radius: 0 25px 25px 0;
    transform: translate(-14px, -51px);
    width: 250px;
    height: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #062060;
    color: #fff;
}
.coursecoupn{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #062060;
    width: 60%;
    margin-left: 22%;
    margin-top: 12%;
}
.result{
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 22%;
    margin-top: 2%;
}
.btnpay{
    margin-left: 45%;
    width: 174px;
    height: 52px;
    border-radius: 44px;
    background-color: #F96A38;
    color: white;
}
</style>

<script>
export default {
    name:'trashstandard'
}
</script>