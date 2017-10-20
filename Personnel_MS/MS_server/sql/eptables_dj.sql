drop table if exists EP_LEAVE_FLOW;
/*==============================================================*/
/* Table: IFDP_SYS_ORGAN_BASE                                              */
/*==============================================================*/
CREATE TABLE `EP_LEAVE_FLOW` (
  `UID` varchar(32) NOT NULL COMMENT 'UID',
  `APPLY_NO` varchar(16) NOT NULL COMMENT '请假编号',
  `USER_NO` varchar(16) NOT NULL COMMENT '工号',
  `LEAVE_START_TIME` date DEFAULT NULL COMMENT '请假开始时间',
  `LEAVE_END_TIME` date DEFAULT NULL COMMENT '请假结束时间',
  `LEAVE_TYPE` varchar(4) DEFAULT NULL COMMENT '请假的类型: 01有薪休假02事假03病假04因公外出05出差06婚假07生育产假08哺乳假09护理假10流产假11产前检查12丧假13忘打卡14忘带卡15特殊16调休假',
  `TIME_SHEET` decimal(16,2) DEFAULT NULL COMMENT '请假工时',
  `AUTH_FLOW` varchar(20) DEFAULT NULL COMMENT '审批流水号',
  `AUTH_STATUS` varchar(2) DEFAULT NULL COMMENT '审批状态',
  `AUTH_VIEW` varchar(2000) DEFAULT NULL COMMENT '审批意见',
  `ATTACHM` varchar(100) DEFAULT NULL COMMENT '附件',
  `REMARK` varchar(2000) DEFAULT NULL COMMENT '备注',
  `CREATED_BY` varchar(100) DEFAULT NULL COMMENT '创建人',
  `CREATED_DATE` date DEFAULT NULL COMMENT '创建时间',
  `UPDATED_BY` varchar(100) DEFAULT NULL COMMENT '更新人',
  `UPDATED_DATE` date DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`UID`,`APPLY_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table EP_LEAVE_FLOW comment '请假管理的详情表';


drop table EP_WORKOT_FLOW cascade constraints;

/*==============================================================*/
/* Table: EP_WORKOT_FLOW                                        */
/*==============================================================*/
create table EP_WORKOT_FLOW  (
   UID                  VARCHAR(32) NOT NULL COMMENT 'UID', 
   APPLY_NO             VARCHAR(16) NOT NULL COMMENT '加班编号',
   USER_NO              VARCHAR(16) NOT NULL COMMENT '用户编号',
   WORKOT_START_TIME    DATE DEFAULT NULL COMMENT '加班开始时间',
   WORKOT_END_TIME      DATE DEFAULT NULL COMMENT '加班结束时间',
   WORKOT_TYPE          VARCHAR(4) DEFAULT NULL COMMENT '加班的类型,参数:01有薪加班02调休加班',
   TIME_SHEET           DECIMAL(16, 2) DEFAULT NULL COMMENT '加班工时',
   AUTH_FLOW            VARCHAR(20) DEFAULT NULL COMMENT '审批流水号',
   AUTH_STATUS          VARCHAR(2) DEFAULT NULL COMMENT '审批状态,参数表:01审批中02审批通过03审批不通过',
   AUTH_VIEW            VARCHAR(2000) DEFAULT NULL COMMENT '审批意见',
   ATTACHM              VARCHAR(100) DEFAULT NULL COMMENT '附件',
   REMARK               VARCHAR(2000) DEFAULT NULL COMMENT '备注',
   CREATED_BY           VARCHAR(100) DEFAULT NULL COMMENT '创建人',
   CREATED_DATE         DATE DEFAULT NULL COMMENT '创建时间',
   UPDATED_BY           VARCHAR(100) DEFAULT NULL COMMENT '更新人',
   UPDATED_DATE         DATE DEFAULT NULL COMMENT '更新时间',
PRIMARY KEY (`UID`,`APPLY_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
alter table EP_WORKOT_FLOW comment '请假管理的详情表';