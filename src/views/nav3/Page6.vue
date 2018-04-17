<template>
	<section>
		<h3>使用ElementUI走马灯实现轮播</h3>
		<el-carousel :interval="5000" arrow="always">
			<el-carousel-item v-for="item in imgArr" :key="item.id">
				<img :src="item.img" alt="" >
				<div class="main-contain" v-for="itemTxt in txtArr" :key="itemTxt.id" v-if="item.id==itemTxt.id">
					<div class="banner-txt">
						<h1>{{itemTxt.title}}</h1>
						<h4>{{itemTxt.subtitle}}</h4>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</section>	
</template>
<script>
import banner from '../../assets/img/banner.png'
import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'
export default {
  data(){
	  return{
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
  }
}
</script>

<style>
	.el-carousel{
		margin-top:25px;
	}
	.el-carousel__container{
		height:600px;
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
  
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	.el-carousel__item{
		height:100%;
	}
	.el-carousel__item img{
		width: 100%;
		min-height: 100%
	}
	.el-carousel__arrow{
		display: none;
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
