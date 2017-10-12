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

