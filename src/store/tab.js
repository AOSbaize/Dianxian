export default{
    state:{
        isCollapse:true, //用于控制菜单的展开收起
        tabsList:[
            {
                path: "/mall",
                name: "mall",
                label: "病人管理",
                icon: "s-custom",
                url: "MallManage/MallManage"
            }
        ] //面包屑的数据
    },
    mutations:{
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state,val){
            console.log(val,'val')
            //判断添加的数据是否为首页
            if(val.name!=='home'){
              const index= state.tabsList.findIndex(item=>item.name===val.name)
              //如果不存在
              if(index===-1){
                state.tabsList.push(val)
              }
            }
        },
        closeTag(state,item){
            // console.log(item,'item')
            const index =state.tabsList.findIndex(val=>val.name===item.name)
            state.tabsList.splice(index,1)
        }
    }
}