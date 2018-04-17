<template>
  <section>
      <h3>使用swiper插件实现轮播效果</h3>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgArr" :key="item.id">
              <img :src="item.img">
              <div class="main-contain" v-for="itemTxt in txtArr" :key="itemTxt.id" v-if="item.id==itemTxt.id">
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
import banner from '../../assets/img/banner.png'
import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'
export default {
  name:'swiper',
  data(){
	  return{
      mySwiper:null,
		  imgArr:[
			  {
				id:1,
				img: banner
			  },
			  {
				  id:2,
				  img:banner1
			  },
			  {
				  id:3,
				  img:banner2
			  },
			  {
				  id:4,
				  img:banner3
			  }
      ],
			txtArr:[
				{
					id:1,
					title:'航景在线APP全新发布',
					subtitle:'航空作业人员的"掌中宝'
				},
				{
					id:2,
					title:'空管大数据平台',
					subtitle:'精准预测发展趋势  保障系统平稳运行'
				},
				{
					id:3,
					title:'低空风切变预警预报系统',
					subtitle:'采用预警机制  实时监测预警'
				},
				{
					id:4,
					title:'管制负荷管理系统全新上线',
					subtitle:'航空飞行管制安全保障产品'
				}
			]
	  }
  },
  mounted () {
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


