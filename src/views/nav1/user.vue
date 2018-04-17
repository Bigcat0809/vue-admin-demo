<template>
    <section>
        <!--头部查询-->
        <el-row class="table-top">
            <el-col :span="24" class="grid-content bg-purple-light">
                <el-form :inline="true">
                    <el-form-item label="姓名">
                        <el-input placeholder="请输入姓名" v-model="filters.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary"  @click="getUsers">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <!--表格-->
        <el-table class="table_box" highlight-current-row :data="users" style="width:100%" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
            <el-table-column type="index" width="60"></el-table-column>
            <el-table-column label="姓名" sortable prop="name"></el-table-column>
            <el-table-column label="性别" sortable prop="sex" :formatter="formatSex"></el-table-column>
            <el-table-column label="年龄" sortable prop="age"></el-table-column>
            <el-table-column label="生日" sortable prop="birth"></el-table-column>
            <el-table-column label="地址" sortable prop="addr"></el-table-column>
        </el-table>
    </section>
</template>
<script>
import {getUserList} from '../../api/api'
export default {
  data(){
      return{
          loading:false,
          users:[],
          filters: {
              name:''
          }
        //   tableData:[{
        //       username:"金莎",
        //       sex:'女',
        //       age:18,
        //       birthday:'1992-08-09',
        //       address:"上海市普陀区金沙江路 1516 弄"
        //   },{
        //       username:"林俊杰",
        //       sex:'男',
        //       age:28,
        //       birthday:'1989-08-09',
        //       address:"上海市普陀区金沙江路 1516 弄"
        //   },{
        //       username:"金莎",
        //       sex:'女',
        //       age:18,
        //       birthday:'1992-08-09',
        //       address:"上海市普陀区金沙江路 1516 弄"
        //   },{
        //       username:"林俊杰",
        //       sex:'男',
        //       age:28,
        //       birthday:'1989-08-09',
        //       address:"上海市普陀区金沙江路 1516 弄"
        //   },{
        //       username:"金莎",
        //       sex:'女',
        //       age:18,
        //       birthday:'1992-08-09',
        //       address:"上海市普陀区金沙江路 1516 弄"
        //   },{
        //       username:"林俊杰",
        //       sex:'男',
        //       age:28,
        //       birthday:'1989-08-09',
        //       address:"上海市普陀区金沙江路 1516 弄"
        //   },{
        //       username:"金莎",
        //       sex:'女',
        //       age:18,
        //       birthday:'1992-08-09',
        //       address:"上海市普陀区金沙江路 1516 弄"
        //   },{
        //       username:"林俊杰",
        //       sex:'男',
        //       age:28,
        //       birthday:'1989-08-09',
        //       address:"上海市普陀区金沙江路 1516 弄"
        //   }]
      }
  },
  methods: {
      //性别显示转换
      formatSex:function(row,column){
          return row.sex==1?'男':row.sex==0?'女':'未知'
      },
      getUsers(){
            let para = {
				name: this.filters.name
            }
            this.loading = true
          getUserList(para).then((res)=>{
              console.log(res)
              this.users=res.data.users;
              this.loading=false
          })
      }
  },
  mounted () {
      this.getUsers()
  }
}
</script>
<style>
    @import url('../../assets/css/home');
    @import url('../../assets/css/table')
</style>


