<template>
    <el-menu default-active="this.$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse"  text-color="black" active-text-color="#ffd04b" :router="true" >

        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<style>
.el-scrollbar_wrap{
    background-color: white;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100vh;

}
</style>
<script>
export default {
    data() {
        return {
            menuData: [
                // {
                //     path: "/home",
                //     name: "home",
                //     label: "首页",
                //     icon: "s-home",
                //     url: "Home/Home"
                // },
                {
                    path: "/mall",
                    name: "mall",
                    label: "病人管理",
                    icon: "s-custom",
                    url: "MallManage/MallManage"
                },

                {
                    path: "/page1",
                    name: "page1",
                    label: "SEG数据分析",
                    icon: "thumb",
                    url: "other/PageOne",
                },
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item) {
            console.log(item)
            if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
                this.$router.push(item.path)
            }
            this.$store.commit('selectMenu', item)

        },

    },
    computed: {
        //没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        //有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }

    }
}
</script>
<style scoped>
.menu-wrapper {
    overflow: hidden
}

.el-menu {
    border-right: none;
}
</style>