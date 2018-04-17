<template>
  <section class="plus_minus">
      <h2>{{msg}}</h2>
      <span>count值是{{$store.state.count}}</span>
      <div class="vuex_btn">
        <el-button @click="$store.commit('add')" type="primary" round size="mini">加一</el-button>
        <el-button @click="$store.commit('reduce')" type="primary" round size="mini">减一</el-button>
      </div>
  </section>
</template>
<script>
import store from '@/vuex/stored'
export default({
    data(){
        return {
            msg:'Hello Vuex'
        }
    },
    store
})
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
</style>

