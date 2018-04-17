<template>  
   <section class="plus_minus">
    <h2>vuex 测试(利用mapGetters和mapActions)</h2>  
    <span>点击了: {{ getCount }} 次 </span> 
    <el-button @click="increment" class="circle" icon="el-icon-plus" type="danger"></el-button>  
    <el-button @click="decrement" class="circle" icon="el-icon-minus" type="danger"></el-button>  
   </section>
</template>  
  
<script>  
  import { mapGetters } from 'vuex'  
  import { mapActions } from 'vuex'  
  
  export default {  
    computed: {  
    ...mapGetters([  
      'getCount'  
    ])  
    },  
    methods: {  
    ...mapActions([  
      'increment',
      'decrement'  
    ])  
    }  
  }  
  
</script> 
<style>
.plus_minus{
    float: left;
    margin:25px 0 25px 0;
}
.plus_minus h1{
    margin-bottom: 20px;
}
.plus_minus p{
    display: inline-block
}
.plus_minus h2{
    display: inline-block
}
.vuex_btn{
    display: inline-block
}
.circle{
  border-radius: 50%;
  padding:5px;
}
</style>