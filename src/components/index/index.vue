<template>
	<el-container>
  <nav-left></nav-left>
  <el-container>
    <headers></headers>
    <el-main>Main</el-main>
  </el-container>
</el-container>

</template>
<script>
// 引入公共的头部
import Headers from '@/components/header/header'
// 引入左侧导航部分
import navLeft from '@/components/navLeft/navLeft'
export default{
	components:{
		Headers,
		navLeft
	}
}

</script>
<style>
	
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>