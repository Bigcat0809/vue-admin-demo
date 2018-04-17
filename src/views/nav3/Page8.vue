<template>
  <section>
      <h3>父子组件调用swiper</h3>
      <div>
          <banner :listImg="listImg" :txtArr="txtArr"></banner>
      </div>
  </section>
</template>
<script>
import Banner from './Banner.vue'
import banner from '../../assets/img/banner.png'
import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'
export default {
    name:'',
    data(){
	  return{
	    listImg:[
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
  components: {
      Banner,
  }
}
</script>

