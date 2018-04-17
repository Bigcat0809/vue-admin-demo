<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo" :class="collapsed?'logo-collapsed':'logo-width'">
                {{collapsed?" ":sysname}}
                <a v-show="collapsed" class="logo-img">
                    <img :src="logoImg" alt="">
                </a>
            </el-col>
            <el-col :span="10">
                <div class="tools" @click.prevent="collapse">
                    <i class="fa fa-align-justify"></i>
                </div>
            </el-col>
            <el-col :span="4" class="userInfo">
                <el-dropdown>
                    <span class="el-dropdown-link userinfo-inner">
                        <img :src="this.sysUserImg">
                        {{sysUserName}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
        <el-col :span="24" class="main">
            <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                <!--导航-->
                <!--单个激活 并以 index 作为 path 进行路由跳转--> 
                <el-menu class="el-menu-vertical-demo" :default-active="$route.path" @open="handleOpen" @close="handleClose" v-show="!collapsed" @select="handleselect" unique-opened router>
                    <!--动态路由到子组件 将不可见的路径隐藏--> 
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                        <el-submenu :index="index+''" v-if="!item.leaf" :key="index">
                            <!--item.name和item.children.name来配置菜单栏和子菜单栏的名称-->  
                            <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                            <el-menu-item v-for="child in item.children" :key="child.path" v-if="!child.hidden" :index="child.path">{{child.name}}</el-menu-item>
                        </el-submenu>
                        <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" :key="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                    </template>
                </el-menu>
                <!--导航折叠后显示-->
                <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
                    <li class="el-submenu item" v-for="(item,index) in $router.options.routes" v-if="!item.hidden" :key="index">
                        <template v-if="!item.leaf">
                            <div class="el-submenu__title" @mouseover="showMenu(index,true)"  @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
                            <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)"  @mouseout="showMenu(index,false)">
                                <li v-for="child in item.children" :key="child.path" v-if="!child.hidden" class="el-menu-item"  :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
                            </ul>
                        </template>
                        <template v-else>
                            <li class="el-submenu">
                                <div class="el-menu-item el-submenu__title" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;min-width:60px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
                            </li>
                        </template>
                    </li>
                </ul>
            </aside>
            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container">
                        <strong class="title">{{$route.name}}</strong>
                        <el-breadcrumb separator="/" class="breadcrumb-title">
                            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{item.name}}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <el-col :span="24" class="content-wrapper">
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </el-col>
                </div>
            </section>
        </el-col>
    </el-row>
    
</template>
<script>
import logo from '../assets/img/logo-img.png'
export default {
    name:'Home',
    data(){
        return{
            sysname:"后台管理系统",
            collapsed:false,
            sysUserName:'',
            sysUserImg:'',
            logoImg:logo
        }
    },
    methods: {
        //折叠导航栏
        collapse:function(){
			this.collapsed=!this.collapsed;
        },
        //退出登录
        logout:function(){
            var _this=this
            this.$confirm('确认退出登陆吗','提示',{
            }).then(()=>{
                sessionStorage.removeItem('user');
                _this.$router.push({path:'/Login'})
            }).catch(()=>{

            })
        },
        handleOpen:function(){

        },
        handleClose:function(){

        },
        handleselect:function(){

        },
        showMenu:function(i,status){
             this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
        }
    },
    mounted () {
        var user=sessionStorage.getItem('user')
        if(user){
            user=JSON.parse(user)
            this.sysUserName=user.name||''
            this.sysUserImg=user.avatar||''
        }
    }
}
</script>
<style>
    @import url('../assets/css/home');

</style>


