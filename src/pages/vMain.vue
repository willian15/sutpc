<template>
  <div class="home">
    <el-row class="tac">
      <el-col :span="20">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="日期" width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="lastName" label="姓名" width="120"></el-table-column>
          <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tableData:[{
          date:'',
          lastName:'',
          email:''
        }]
      }
    },

    methods: {

      //发送ajax，请求后端数据
      getEmpsList() {
        this.axios.get('/emp/${id}')
          .then(response=>{
            const empsList = response.data;
            this.lastName = empsList.lastName;
          }).catch(response=>{
          alert("请求失败")
        })
      },

      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style>

</style>
