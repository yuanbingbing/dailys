<template>
		<el-aside width="200px">
			<el-row>
				<el-col span="24">
					<el-menu background-color="#545c64" default-active="1" router="">
						<el-menu-item index="1">周评</el-menu-item>
						<el-menu-item index="2">报表</el-menu-item>
						<el-menu-item index="3">系统管理</el-menu-item>
						<el-menu-item index="4">项目管理</el-menu-item>
						<el-menu-item index="5">用户管理</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</el-aside>
</template>
<script>
	export default{
		data(){
			return {

			}
		}
	}
</script>
<style lang="scss" scoped type="text/css">
// 定义边框
$border:'1px solid #e4e4e4';
.el-aside {
    background-color: #ddd;
    color: #333;
    text-align: center;
    height:800px;
  }
  // 导航条
  .el-menu-item {
  	border:#{$border}
  }
</style>