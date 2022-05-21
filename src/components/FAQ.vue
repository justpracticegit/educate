<template>
    <div class="faq">
        <div class="container questionandanswer">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                     Вопрос по определенной тематике
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       Вопрос по определенной тематике
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Вопрос по определенной тематике
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div> 
            <div class="faqright">
                <img class="faqright" src="@/assets/img/QuestionandAnswer.png" alt="">
            </div>      
        </div>   
    </div>
</template>
<style scoped>
.faq{
  background: url(@/assets/img/faqcloud.png) no-repeat left top,
              url("@/assets/img/faqcloud4.png") no-repeat 85% top,
              url("@/assets/img/faqcloud3.png") no-repeat 100% 10%,
              url("@/assets/img/faqcloud2.png") no-repeat right;
}
.questionandanswer{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.accordion{
    width: 50%;
    margin-top: 249px;
}
.accordion-button{
    background: url(@/assets/img/faq01.png) no-repeat left;
    background-color: #E2F4FF;
    padding-left: 80px;
    color: #062060;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
}
.accordion-item{
    background-color: #E2F4FF;
}
.faqimg{
    left: 0;
}
.faqright{
  margin-top: 249px;
}
</style>
