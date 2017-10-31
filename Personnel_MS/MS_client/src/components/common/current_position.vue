<template>
    <div class="location-wrapper">
        <el-row>
            <el-col :span="22">
                <span class="title">当前位置：</span>
                <el-breadcrumb separator="/" class="breadcrumb-inner">
                    <el-breadcrumb-item v-if="yiji" :to="{ path: links[0] }" class="test1">{{yiji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="erji" :to="{ path: links[1] }" class="test1">{{erji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="sanji" :to="{ path: links[2] }" class="test1">{{sanji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="siji" :to="{ path: links[3] }" class="test1">{{siji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="wuji" :to="{ path: links[4] }" class="test1">{{wuji}}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if='false'>{{activeTab}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="2" v-show="breadItemLength>1">
                <img src="../../../static/img/common/back.png" alt="pic" width="19" height="12" class="pic" @click="jump">
            </el-col>
        </el-row>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
    data() {
        return {
            link: [],
            breadItemLength: 0,
        }
    },
    created() {

    },
    methods: {
        jump() {
            let aa = this.link[this.breadItemLength - 2]
            if (!aa) return false
            if(this.activeTab){
                this.$router.push({
                    name: aa,
                    params: {
                        activeTab: this.activeTab
                    }
                })
            } else {
                this.$router.push(aa)
            }
        },
    },
    computed: {
        links() {
            let _link = []
            if (this.yiji === '系统管理') {
                _link.push('/management_framework')
            }
            if (this.yiji === '人事事务') {
                _link.push('/personnel_contract')
            }
            if (this.yiji === '参数管理') {
                _link.push('/argument_1')
            }
            if (this.yiji === '薪酬福利') {
                _link.push('/payBaseInfo_setting')
            }
            if (this.yiji === '考勤管理') {
            	_link.push('/attendance_record')
            }

            if (this.erji === '用户管理') {
                _link.push('/management_user')
            }
            if (this.erji === '角色管理') {
                _link.push('/management_role')
            } 
            if (this.erji === '功能管理') {
                _link.push('/management_fun')
            }
            if (this.erji === '组织架构') {
                _link.push('/management_framework')
            }
            if (this.erji === '人事合同') {
                _link.push('/personnel_contract')
            }
            if (this.erji === '人事调动') {
            	_link.push('/personnel_transfer')
            }
            if (this.erji === '业务参数') {
                _link.push('/argument_2')
            }
            if (this.erji === '薪酬基数设置') {
                _link.push('/payBaseInfo_setting')
            }
            if (this.erji === '调薪管理') {
                _link.push('/payChange_manage')
            }
			if (this.erji === '考勤记录管理') {
				_link.push('/attendance_record')
			}
			if (this.erji === '出差管理') {
				_link.push('/travel_management')
			}
			if (this.erji === '请假管理') {
				_link.push('/leave_management')
			}
			if (this.erji === '加班管理') {
				_link.push('/overtime_management')
			}
			
            if (this.sanji === '编辑部门') {
                _link.push('/edit_department')
            }
            if (this.sanji === '新增机构人员') {
                _link.push('/add_person')
            }
            if (this.sanji === '新增子部门') {
                _link.push('/add_junior')
            }
            if (this.sanji === '新增角色') {
                _link.push('/add_role')
            }
            if (this.sanji === '编辑角色') {
                _link.push('/edit_role')
            }
            if (this.sanji === '用户信息') {
                _link.push('/edit_userM')
            }
            if (this.sanji === '功能编辑') {
                _link.push('/edit_fun')
            }
            if (this.sanji === '合同新增') {
                _link.push('/add_contract')
            }
            if (this.sanji === '合同修改') {
                _link.push('/edit_contract')
            }
            if (this.sanji === '合同详情') {
                _link.push('detail_contract')
            }
            if (this.sanji === '合同变更') {
                _link.push('/add_pactChange')
            }  
            if (this.sanji === '合同续签') {
                _link.push('/add_pactRenew')
            }       
            if (this.sanji === '机构CCC管理') {
                _link.push('/agency_argument')
            }
            if (this.sanji === '免签节假日维护') {
                _link.push('/holiday_info')
            }
            if (this.sanji === '公司开票信息维护') {
                _link.push('/ticket_info')
            }
            if (this.sanji === '福利缴纳系数设置') {
                _link.push('/welfare_coefficient')
            }
            if (this.sanji === '个人所得税税率设置') {
                _link.push('/tax_rate')
            }
            if (this.sanji === '职级薪酬标准设置') {
                _link.push('/rank')
            }
            if (this.sanji === '薪酬基数新增') {
                _link.push('/add_payBaseInfo')
            }
            if (this.sanji === '薪酬基数修改') {
                _link.push('/edit_payBaseInfo')
            }
            if (this.sanji === '薪酬基数详情') {
                _link.push('/detail_payBaseInfo')
            }
            if (this.sanji === '调薪查询') {
                _link.push('/query_payChangeInfo')
            }
            if (this.sanji === '人事调动明细查询') {
                _link.push('/detail_transfer')
            }
            if (this.sanji === '员工离职明细查询') {
                _link.push('/detail_dimission')
            }
            if (this.sanji === '出差新增') {
                _link.push('/add_travel')
            }
            if (this.sanji === '出差详情') {
                _link.push('/travel_info')
            }
            if (this.sanji === '出差修改') {
                _link.push('/edit_travel')
            }
            if (this.sanji === '请假新增') {
                _link.push('/add_leave')
            }
            if (this.sanji === '请假详情') {
                _link.push('/leave_info')
            }
            if (this.sanji === '请假修改') {
                _link.push('/edit_leave')
            }
            if (this.sanji === '加班新增') {
                _link.push('/add_overtime')
            }
            if (this.sanji === '加班详情') {
                _link.push('/overtime_info')
            }
            if (this.sanji === '加班修改') {
                _link.push('/edit_overtime')
            }
            
            
            if (this.siji === '人事调动详情') {
                _link.push('/transfer_info')
            }
            if (this.siji === '人事调动修改') {
                _link.push('/edit_transfer')
            }
            if (this.siji === '人事调动新增') {
                _link.push('/add_transfer')
            }
            if (this.siji === '员工离职详情') {
                _link.push('/dimission_info')
            }
            if (this.siji === '员工离职修改') {
                _link.push('/edit_dimission')
            }
            if (this.siji === '员工离职新增') {
                _link.push('/add_dimission')
            }
            if (this.siji === '福利缴纳系数新增') {
                _link.push('/add_welfare')
            }
            if (this.siji === '福利缴纳系数详情') {
            	_link.push('/welfare_info')
            }
            if (this.siji === '个人所得税税率详情') {
            	_link.push('/rate_info')
            }
            if (this.siji === '税率组新增') {
                _link.push('/add_rateGroup')
            }
            if (this.siji === '职级薪酬标准新增') {
                _link.push('/add_rank')
            }
            if (this.siji === '职级薪酬标准修改') {
            	_link.push('/edit_rank')
            }
            if (this.siji === 'CCC新增') {
                _link.push('/add_agency')
            }
            if (this.siji === 'CCC修改') {
                _link.push('/modify_agency')
            }
            if (this.siji === '节假日新增') {
                _link.push('/add_holiday')
            }
            if (this.siji === '开票信息新增') {
                _link.push('/add_ticket')
            }
            if (this.siji === '合同变更详情') {
                _link.push('/detail_pactChange')
            }
            if (this.siji === '合同变更修改') {
                _link.push('/edit_pactChange')
            }
            if (this.siji === '合同续签详情') {
                _link.push('/detail_pactRenew')
            }
            if (this.siji === '合同续签修改') {
                _link.push('/edit_pactRenew')
            }
            if (this.siji === '调薪基数详情') {
                _link.push('/detail_payChangeInfo')
            }
            if (this.siji === '调薪基数新增') {
                _link.push('/add_payChangeInfo')
            }
            if (this.siji === '调薪基数修改') {
                _link.push('/edit_payChangeInfo')
            }

            if (this.wuji === '税率新增') {
            	_link.push('/add_rate')
            }
            if (this.wuji === '税率修改') {
            	_link.push('/edit_rate')
            }
            this.link = _link
            this.breadItemLength = _link.length
            return this.link
        }
    },
    props: {
        yiji: {
            type: String,
            default: ''
        },
        erji: {
            type: String,
            default: ''
        },
        sanji: {
            type: String,
            default: ''
        },
        siji: {
            type: String,
            default: ''
        },
        wuji: {
            type: String,
            default: ''
        },
        activeTab: {
            type: String,
            default: ''
        },
    }
}
</script>

<style scoped>
.location-wrapper {
    height: 70px;
    line-height: 70px;
    font-size: 12px;
}

.location-wrapper .el-row {
    width: 100%;
}

.location-wrapper .title {
    color: #475669;
    vertical-align: middle;
}

.location-wrapper .breadcrumb-inner {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
}

.pic {
    cursor: pointer;
}
</style>
