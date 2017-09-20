/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2017/9/19 16:30:12                           */
/*==============================================================*/


drop table if exists IFDP_SYS_BSN;

drop table if exists IFDP_SYS_MENU;

drop table if exists IFDP_SYS_MENU_FUNC;

drop table if exists IFDP_SYS_REL_ROLE_BSN;

drop table if exists IFDP_SYS_REL_USER_ROLE;

drop table if exists IFDP_SYS_ROLE;

drop table if exists IFDP_SYS_USER_BASE;

/*==============================================================*/
/* Table: IFDP_SYS_BSN                                               */
/*==============================================================*/
create table IFDP_SYS_BSN
(
   UID                  varchar(32) not null comment '租户ID',
   BSN_NO               varchar(16) not null comment '功能编号',
   INTERFACE            varchar(50) not null comment '接口名称',
   METHOD_NAME          varchar(50) not null comment '方法名称',
   SERVICE              varchar(20) not null comment '服务名称',
   STATUS               varchar(1) not null comment '状态参数表->状态：(0-无效; 1-有效)',
   REMARK               varchar(60) comment '备注',
   CREATED_BY           varchar(20) not null comment '创建人',
   CREATED_DATE         date not null comment '创建时间',
   UPDATED_BY           varchar(20) not null comment '更新人',
   UPDATED_DATE         date not null comment '更新时间',
   primary key (UID, BSN_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_BSN comment '业务功能表 SYS_BSN';

/*==============================================================*/
/* Table: IFDP_SYS_MENU                                              */
/*==============================================================*/
create table IFDP_SYS_MENU
(
   UID                  varchar(32) not null comment '租户ID',
   SYS_NO               varchar(1) not null comment '系统编号',
   MENU_NO              varchar(16) not null comment '菜单编码',
   MENU_NAME            varchar(60) not null comment '菜单名称',
   UP_MENU_NO           varchar(16) not null comment '上级菜单编码',
   MENU_LEVEL           varchar(10) not null comment '菜单级别',
   MENU_ORDER           varchar(10) not null comment '菜单顺序',
   MENU_URL             varchar(256) comment '菜单功能链接',
   MENU_DESCR           varchar(60) comment '菜单描述menu_descr',
   MENU_IMG             varchar(60) comment '菜单图标',
   STATUS               varchar(1) comment '菜单状态参数表->状态：(0-无效; 1-有效)',
   CREATED_BY           varchar(20) not null comment '创建人',
   CREATED_DATE         date not null comment '创建时间',
   UPDATED_BY           varchar(20) not null comment '更新人',
   UPDATED_DATE         date not null comment '更新时间',
   primary key (UID, SYS_NO, MENU_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;
alter table IFDP_SYS_MENU_FUNC comment '系统菜单表';

/*==============================================================*/
/* Table: IFDP_SYS_MENU_FUNC                                         */
/*==============================================================*/
create table IFDP_SYS_MENU_FUNC
(
   UID                  varchar(32) not null comment '租户ID',
   SYS_NO               varchar(1) not null comment '系统编号',
   MENU_NO              varchar(16) not null comment '菜单编号',
   BSN_NO               varchar(16) not null comment '功能编号',
   CREATED_BY           varchar(20) not null comment '创建人',
   CREATED_DATE         date not null comment '创建时间',
   UPDATED_BY           varchar(20) not null comment '更新人',
   UPDATED_DATE         date not null comment '更新时间',
   REMARK               varchar(256) comment '备注',
   primary key (UID, SYS_NO, BSN_NO, MENU_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_MENU_FUNC comment 'IFDP_SYS_MENU_FUNC';

/*==============================================================*/
/* Table: IFDP_SYS_REL_ROLE_BSN                                      */
/*==============================================================*/
create table IFDP_SYS_REL_ROLE_BSN
(
   UID                  varchar(32) not null comment '租户ID',
   ROLE_NO              varchar(16) not null comment '角色编号',
   BSN_NO               varchar(16) not null comment '功能编号',
   STATUS               varchar(1) comment '状态参数表->状态：(0-无效; 1-有效)',
   CREATED_BY           varchar(20) not null comment '创建人',
   CREATED_DATE         date not null comment '创建时间',
   UPDATED_BY           varchar(20) not null comment '更新人',
   UPDATED_DATE         date not null comment '更新时间',
   REMARK               varchar(256) comment '描述',
   primary key (UID, BSN_NO, ROLE_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_REL_ROLE_BSN comment '角色功能关系表 SYS_REL_ROLE_BSN';

/*==============================================================*/
/* Table: IFDP_SYS_REL_USER_ROLE                                     */
/*==============================================================*/
create table IFDP_SYS_REL_USER_ROLE
(
   UID                  varchar(32) not null comment '租户ID',
   USER_NO              varchar(20) not null comment '用户编号',
   ROLE_NO              varchar(16) not null comment '角色编号',
   STATUS               varchar(1) comment '参数表->状态：(0-无效; 1-有效)；默认：1',
   CREATED_BY           varchar(20) not null comment '创建人',
   CREATED_DATE         date not null comment '创建时间',
   UPDATED_BY           varchar(20) not null comment '更新人',
   UPDATED_DATE         date not null comment '更新时间',
   REMARK               varchar(256) comment '备注',
   primary key (USER_NO, ROLE_NO, UID)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_REL_USER_ROLE comment '用户角色关系表SYS_REL_USER_ROLE';

/*==============================================================*/
/* Table: IFDP_SYS_ROLE                                              */
/*==============================================================*/
create table IFDP_SYS_ROLE
(
   UID                  varchar(32) not null comment '租户ID',
   ROLE_NO              varchar(16) not null comment '角色编码',
   ROLE_NAME            varchar(60) not null comment '角色名称',
   ROLE_DESCR           varchar(60) comment '角色描述',
   ROLE_STATUS          varchar(1) comment '状态参数表->状态：(0-无效; 1-有效)',
   CREATED_BY           varchar(20) not null comment '创建人',
   CREATED_DATE         date not null comment '创建时间',
   UPDATED_BY           varchar(20) not null comment '更新人',
   UPDATED_DATE         date not null comment '更新时间',
   primary key (UID, ROLE_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_ROLE comment '角色表SYS_ROLE';

/*==============================================================*/
/* Table: IFDP_SYS_USER_BASE                                    */
/*==============================================================*/
create table IFDP_SYS_USER_BASE
(
   UID                  varchar(32) not null comment '租户ID',
   USER_NO              varchar(16) not null comment '用户编号：默认员工号',
   LOG_NAME             varchar(30) comment '登录名',
   CERT_NO              varchar(20) comment '证件号码',
   MOBILE_TEL           varchar(20) not null comment '移动电话',
   EMAIL                varchar(50) not null comment '电子邮箱',
   ORGAN_NO             varchar(20) not null comment '所属机构',
   STATUS               varchar(1) not null comment '用户状态0 正常  1 停用  2 锁定 默认：0',
   PSWD                 varchar(64) comment '登录密码',
   PSWD_LEVEL           varchar(1) comment '登录密码强度',
   REMARK               varchar(60) comment '备注',
   CREATED_BY           varchar(20) not null comment '创建人',
   CREATED_DATE         date not null comment '创建时间',
   UPDATED_BY           varchar(20) not null comment '更新人',
   UPDATED_DATE         date not null comment '更新时间',
   primary key (UID, USER_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_USER_BASE comment '用户基础信息表SYS_USER_BASE';

