drop table if exists IFDP_SYS_ORGAN_BASE;
/*==============================================================*/
/* Table: IFDP_SYS_ORGAN_BASE                                              */
/*==============================================================*/
create table IFDP_SYS_ORGAN_BASE
(
   UID                  varchar(32) not null comment '租户ID',
   ORGAN_NO             varchar(20) not null comment '机构号',
   ORGAN_NAME           varchar(120) not null comment '机构名称',
   ORGAN_TYPE           varchar(2) not null comment '机构类型 01总公司  02 分公司 03 办事处  04 部门',
   ORGAN_STATUS         varchar(2) not null comment '机构状态
            参数表->0-停用; 1-启用',
   PARENT_NO            varchar(20) comment '上级机构',
   ORGAN_LEVEL          varchar(1) not null comment '机构级别',
   ORGAN_DESCR          varchar(60) comment '机构描述',
   ORG_PATH             varchar(120) comment '机构层级描述',
   CREATED_BY           varchar(20) not null comment '创建人',
   CREATED_DATE         date not null comment '创建时间',
   UPDATED_BY           varchar(20) not null comment '更新人',
   UPDATED_DATE         date not null comment '更新时间',
   primary key (UID, ORGAN_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_ORGAN_BASE comment '机构表基础信息表：SYS_ORGAN_BASE 
记录机构的基础信息，本表为机构信息主表，对应多张附属属性表';


drop table if exists EP_PAY_BASEINF;

/*==============================================================*/
/* Table: EP_PAY_BASEINF                                        */
/*==============================================================*/
create table EP_PAY_BASEINF
(
   UID                  VARCHAR (32) not null comment 'UID',
   USER_NO              VARCHAR (16) not null comment '用户编号',
   WAGES_BASE           decimal(16,2) comment '基础工资',
   WAGES_PERF           decimal(16,2) comment '绩效工资',
   POST_PENSION         decimal(16,2) comment '岗位补贴',
   OTHER_PENSION        decimal(16,2) comment '其他补贴',
   ENDM_BASE            decimal(16,2) comment '养老保险基数',
   MEDI_BASE            decimal(16,2) comment '医疗保险基数',
   UNEM_BASE            decimal(16,2) comment '失业保险基数',
   EMPL_BASE            decimal(16,2) comment '工伤保险基数',
   MATE_BASE            decimal(16,2) comment '生育保险基数',
   HOUSE_BASE           decimal(16,2) comment '公积金基数',
   PROB_RATIO           decimal(16,2) comment '试用期比例',
   WELCOE_NO            VARCHAR (15) comment '保险缴纳标准',
   PBASE_STATUS         VARCHAR (2) comment '状态参数表：PBASE_STATUS 01 有效 02 无效 ',
   REMARK               VARCHAR (2000) comment '备注',
   CREATED_BY          VARCHAR(100) comment '创建人',
   CREATED_DATE        DATE comment '创建时间',
   UPDATED_BY          VARCHAR(100) comment '更新人',
   UPDATED_DATE        DATE comment '更新时间',
   primary key (UID, USER_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table EP_PAY_BASEINF comment '用户薪酬基数信息表';


DROP FUNCTION IF EXISTS queryChildrenOrganInfo

/*==============================================================*/
/* Method: queryChildrenOrganInfo    查询部门下的所有子部门Id                                         */
/*==============================================================*/
CREATE FUNCTION queryChildrenOrganInfo(organNo VARCHAR(20))
RETURNS VARCHAR(4000)
BEGIN
DECLARE organNoList VARCHAR(4000);
SET organNoList='$';
WHILE organNo IS NOT NULL DO
SET organNoList= CONCAT(organNoList,',',organNo);
SELECT GROUP_CONCAT(organ_no) INTO organNo FROM IFDP_SYS_ORGAN_BASE WHERE FIND_IN_SET(parent_no,organNo)>0;
END WHILE;
RETURN organNoList;
END

DROP FUNCTION IF EXISTS queryBelongOrganByUserNo;
/*==============================================================*/
/* Method: queryBelongOrganByUserNo    查询用户最终属于哪个机构（总公司或者分公司）                                         */
/*==============================================================*/
CREATE FUNCTION queryBelongOrganByUserNo(userNo VARCHAR(20))
RETURNS VARCHAR(20)
BEGIN
DECLARE organNo VARCHAR(20);
DECLARE parentNo VARCHAR(20);
DECLARE organType VARCHAR(5);

select organ_no into organNo from IFDP_SYS_USER_BASE where user_no = userNo;

SET parentNo = organNo;

WHILE parentNo IS NOT NULL DO
select organ_type into organType from IFDP_SYS_ORGAN_BASE where organ_no = parentNo;
if CAST(organType as SIGNED) <= 2 then
	return parentNo;
end if;
SELECT GROUP_CONCAT(parent_no) INTO parentNo FROM IFDP_SYS_ORGAN_BASE WHERE FIND_IN_SET(organ_no,parentNo)>0;
END WHILE;
RETURN null;
END;


SET GLOBAL group_concat_max_len=102400;
SET SESSION group_concat_max_len=102400;

