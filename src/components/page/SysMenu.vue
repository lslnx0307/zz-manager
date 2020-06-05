<template>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-lx-cascades"></i> 菜单列表
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
import { listMenu } from '../../api';
export default {
    data() {
        return {
            query: {
                pageSize: 10,
                pageNo: 1
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1
        };
    },
    created() {
        this.getData();
    },
    mounted: {
        getData() {
            listMenu(this.query).then(res => {
                this.tableData = res.data.list;
                this.pageTotal = res.data.count;
            });
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>