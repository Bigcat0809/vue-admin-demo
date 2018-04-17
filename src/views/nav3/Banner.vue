<template>
  <section>
    <h3>子组件通过props接收父组件数据(子组件自然就是指轮播图组件swiper)</h3>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :key="str.id">
              <img :src="str.img" alt="">
              <div class="main-contain" v-for="itemTxt in txtArr" :key="itemTxt.id" v-if="str.id==itemTxt.id">
                <div class="banner-txt">
                  <h1>{{itemTxt.title}}</h1>
                  <h4>{{itemTxt.subtitle}}</h4>
                </div>
              </div>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
  </section>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name:'Banner',
  props: ['listImg','txtArr'],
  mounted() {
    console.log('mounted', this)
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        bulletElement : 'li',
        clickable :true,
      },
      slidesPerView: 1,
      loop: true,
      autoplay:true,
    });  
  }
}
</script>
<style>
  .swiper-container {
    width: 100%;
    height: 500px;
    margin-top: 0.9rem;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-size: cover;
    width: 100%;
    height: 100%;
                  
  }
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet{
    background: #00ff00;
    width: 12px;
    height: 12px;
  }
  .main-contain{
		width: 62.5%;
    	position: absolute;
    	left: 0;
    	top: 35%;
    	z-index: 9999;
	}
	.banner-txt h1 {
		color: #fff;
		font-size: 48px;
		font-weight: normal;
		margin-bottom: 40px;
	}
	.banner-txt h4 {
		color: #fff;
		font-size: 28px;
		font-weight: normal;
		margin-bottom: 90px;
	}
</style>




