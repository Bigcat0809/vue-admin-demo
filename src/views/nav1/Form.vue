<template>
	<el-form ref="form" :model="form" label-width="80px"  class="form-container" :rules="formRule">
		<el-form-item label="活动名称" prop="name">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="活动区域" prop="region">
			<el-select v-model="form.region" placeholder="请选择活动区域" class="select_box" >
				<el-option label="区域一" value="上海"></el-option>
				<el-option label="区域二" value="北京"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="活动时间">
            <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" style="width:100%" v-model="form.date1"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col class="line" :span="2">--</el-col>
            <el-col :span="11">
                <el-form-item prop="date2">
                    <el-time-picker type="fixed-time" placeholder="选择时间" style="width:100%" v-model="form.date2"></el-time-picker>
                </el-form-item>
            </el-col>
      </el-form-item>
		<el-form-item label="即时配送">
          <el-col :span="1">
              <el-switch v-model="form.delivery"></el-switch>
          </el-col>
      </el-form-item>
		<el-form-item label="活动性质" prop="type">
            <el-checkbox-group class="check_boxes" v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
      </el-form-item>
		<el-form-item label="特殊资源" class="radio_box" prop="resource">
            <el-radio-group class="radio_boxes" v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="dec">
          <el-input type="textarea" v-model="form.dec" ></el-input>
      </el-form-item>
      <el-form-item class="btn_boxes">
          <el-button type="primary" @click="submit">立即创建</el-button>
          <el-button @click="cancelForm">取消</el-button>
      </el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
                },
                formRule:{
                    name:[
                       { required: true, message: '请输入活动名称', trigger: 'blur' },
                       { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region:[
                        {required:true,message:'请选择区域',trigger:'change'}
                    ],
                    date1:[
                        {
                            required:true,message:'请输入日期',trigger:'change',type:'date'
                        }
                    ],
                    date2:[
                        {
                            required:true,message:'请输入时间',trigger:'change',type:'date'
                        }
                    ],
                    type:[
                        {
                            required: true, message: '请至少选择一个活动性质', trigger: 'change',type:'array'
                        }
                    ],
                    resource:[
                        {
                            required:true,message:'请选择活动资源',trigger:'change'
                        }
                    ],
                    dec:[
                        {
                            required:true,message:'请填写活动形式',trigger:'blur'
                        }
                    ]
                }
			}
		},
		methods: {
			submit(){
                this.$refs.form.validate((valid)=>{
                    if(valid){
                        this.$notify({
                            title: '成功',
                            message: '创建成功',
                            type: 'success'
                        });
                    }
                })
            },
            cancelForm(){
                this.$refs['form'].resetFields()
            }
		}
	}

</script>
<style>
    .form-container{
        width: 60%;
        min-width: 600px;
        margin:25px;
    }
    .check_boxes label,.radio_boxes{
        float: left;
        
    }
    .check_boxes label.el-checkbox+.el-checkbox{
        margin-left: 20px;
    }
    .radio_box .el-form-item__content{
        margin-top:10px;
    }
    .select_box{
        float: left;
    }
    .btn_boxes button{
        float: left;
    }
</style>