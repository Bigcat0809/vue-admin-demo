<template>
    <section>
        <!--头部查询-->
        <el-row class="table-top">
            <el-col :span="24" class="grid-content bg-purple-light">
                <el-form :inline="true">
                    <el-form-item label="姓名">
                        <el-input placeholder="请输入姓名" v-model="filter.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="getUserList">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleAdd">新增</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <!--表格-->
        <el-table class="table_box" highlight-current-row :data="userList" style="width:100%" v-loading="loading" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="index" width="60" :index="typeIndex"></el-table-column>
            <el-table-column label="姓名" sortable prop="name"></el-table-column>
            <el-table-column label="性别" sortable prop="sex" :formatter="formatSex"></el-table-column>
            <el-table-column label="年龄" sortable prop="age"></el-table-column>
            <el-table-column label="生日" sortable prop="birth"></el-table-column>
            <el-table-column label="地址" sortable prop="addr"></el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="delUserList(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-row class="toobar">
            <el-col :span="24">
                <el-button type="danger" :span="6" class="dels" @click="batchDel" :disabled="this.sels.length===0">批量删除</el-button>
                <el-pagination background layout="prev, pager, next,jumper,total" :total="total" @current-change="handleCurrentChange" :page-size="20"></el-pagination>
            </el-col>
        </el-row>
        <!-- 新增 -->
        <el-dialog :visible.sync="dialogAddVisible" title="新增用户信息" :close-on-click-modal="false">
            <el-form  label-width="80px" :model="addForm" :rules="addFromRules" ref="addForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="addForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group class="radio-sex" v-model="addForm.sex">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄" >
                    <el-input-number :min="0" :max="200" v-model="addForm.age"></el-input-number>
                </el-form-item>
                <el-form-item label="日期" >
                    <el-date-picker type="date" class="date-item" v-model="addForm.birth" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input type="textarea" v-model="addForm.addr"></el-input>
                </el-form-item>
            </el-form>
            <div class="dialog-footer" slot="footer">
                <el-button @click="dialogAddVisible=false">取消</el-button>
                <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>
        <!-- 编辑 -->
        <el-dialog :visible.sync="dialogEditVisible" title="编辑用户信息" :close-on-click-modal="false">
            <el-form  :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group class="radio-sex" v-model="editForm.sex">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input-number :min="0" :max="200" v-model="editForm.age"></el-input-number>
                </el-form-item>
                <el-form-item label="日期">
                    <el-date-picker type="date" class="date-item" v-model="editForm.birth" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input type="textarea" v-model="editForm.addr"></el-input>
                </el-form-item>
            </el-form>
            <div class="dialog-footer" slot="footer">
                <el-button @click="dialogEditVisible=false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<script>
import {getUserPageList,removeUser,addUser,editUser,batchUsers} from '../../api/api'
import moment from 'moment'
export default {
  data(){
      return{
          userList:[],
          filter:{
              name:''
          },
          total:0,
          page:1,
          loading:false,
          sels:[],
          //新增数据初始化
          dialogAddVisible:false,
          addLoading: false,
          addForm:{
              id:0,
              name:'',
              sex:-1,
              age:0,
              birth:'',
              addr:'',
              province:'',
              city:'',
              country:''
          },
          addFromRules:{
              name:[
                  {required:true,message:'请输入姓名',trigger:'blur'}
              ]
          },
          selected:[],
          //编辑数据初始化
          dialogEditVisible:false,
          editLoading:false,
          editForm:{
              id:0,
              name:'',
              sex:-1,
              age:0,
              birth:'',
              addr:'',
              province:'',
              city:'',
              country:''
          },
          editFormRules:{
              name:[
                  {required:true,message:'请输入姓名',trigger:'blur'}
              ]
          }
      }
  },
 methods: {
     formatSex:function(row,column){
         return row.sex==1?'男':row.sex==0?'女':'未知'
     },
     getUserList(){
         let para={
             page:this.page,
             name:this.filter.name
         }
         this.loading=true
         getUserPageList(para).then((res)=>{
             console.log(res)
             this.total=res.data.total,
             this.userList=res.data.users
             this.loading=false
         })
     },
     handleCurrentChange(val){
        console.log(val)
        this.page = val;
		this.getUserList();
     },
     typeIndex(index){
         return index+(this.page-1)*20+1

     },
     delUserList(index,row){
         this.$confirm('确认删除信息吗?','提示',{
             type:'warning'
         }).then(()=>{
             this.loading=true
             let para={id:row.id}
             removeUser(para).then((res)=>{
                 this.loading=false
                 this.$message({
                    type: 'success',
                    message: '删除成功!'
                 })
                 this.getUserList()
             })
         }).catch(()=>{
            this.$message({
                type: 'info',
                message: '已取消删除'
            });
         })
     },
     //显示新增页面
     handleAdd(){
         this.dialogAddVisible=true
         this.addForm={
             name:'',
             sex:-1,
             age:0,
             birth:'',
             addr:''
         }
     },
     //提交新增信息
     addSubmit(){
         this.$refs.addForm.validate((valid)=>{
             if(valid){
                 this.$confirm('确认提交信息吗','提示',{type:'warning'}).then(()=>{
                    this.addLoading=true
                    let para=Object.assign({},this.addForm)
                    console.log(para)
                    //para.birth=(!para.birth||para.birth=="")?'':(moment(para.birth).format('yyyy-MM-dd'))
                    addUser(para).then((res)=>{
                        this.addLoading=false
                        this.$message({
                            type:'success',
                            message:'添加成功'
                        })
                        this.$refs['addForm'].resetFields();
                        this.dialogAddVisible=false
                        this.getUserList()
                    })
                 })
             }
         })
     },
     //显示编辑页面
     handleEdit(index,row){
         console.log(row)
         this.dialogEditVisible=true
         this.editForm=Object.assign({},row)
     },
     //提交编辑信息
     editSubmit(){
         this.$refs.editForm.validate((valid)=>{
             if(valid){
                 this.$confirm('确认提交信息吗？','提示',{type:'warning'}).then(()=>{
                     this.editLoading=true
                     let para=Object.assign({},this.editForm)
                     console.log(para)
                     editUser(para).then((res)=>{
                        this.editLoading=false
                        this.$message({
                            type:'success',
                            message:'编辑成功'
                        })
                        this.$refs['editForm'].resetFields()
                        this.dialogEditVisible=false
                        this.getUserList()
                     })
                 })
             }
         })
     },
     handleSelectionChange(val){
         console.log(val)
         this.sels=val
     },
     //批量删除用户信息
    batchDel(){
        var ids=this.sels.map(item=>item.id).toString()
        this.$confirm('确认删除信息吗?','提示',{type:'warning'})
        .then(()=>{
            this.loading=true
            let para={ids:ids}
            batchUsers(para).then((res)=>{
                this.loading=false
                this.$message({
                    type:'success',
                    message:'批量删除成功'
                })
                this.getUserList()
            })
        }).catch(()=>{})
    }
 },
 mounted () {
     this.getUserList()
 }
}
</script>
<style>
    @import url('../../assets/css/home');
    @import url('../../assets/css/table');
    @import url('../../assets/css/area')
</style>


