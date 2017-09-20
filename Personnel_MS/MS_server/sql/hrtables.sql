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
   UID                  varchar(32) not null comment '�⻧ID',
   BSN_NO               varchar(16) not null comment '���ܱ��',
   INTERFACE            varchar(50) not null comment '�ӿ�����',
   METHOD_NAME          varchar(50) not null comment '��������',
   SERVICE              varchar(20) not null comment '��������',
   STATUS               varchar(1) not null comment '״̬������->״̬��(0-��Ч; 1-��Ч)',
   REMARK               varchar(60) comment '��ע',
   CREATED_BY           varchar(20) not null comment '������',
   CREATED_DATE         date not null comment '����ʱ��',
   UPDATED_BY           varchar(20) not null comment '������',
   UPDATED_DATE         date not null comment '����ʱ��',
   primary key (UID, BSN_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_BSN comment 'ҵ���ܱ� SYS_BSN';

/*==============================================================*/
/* Table: IFDP_SYS_MENU                                              */
/*==============================================================*/
create table IFDP_SYS_MENU
(
   UID                  varchar(32) not null comment '�⻧ID',
   SYS_NO               varchar(1) not null comment 'ϵͳ���',
   MENU_NO              varchar(16) not null comment '�˵�����',
   MENU_NAME            varchar(60) not null comment '�˵�����',
   UP_MENU_NO           varchar(16) not null comment '�ϼ��˵�����',
   MENU_LEVEL           varchar(10) not null comment '�˵�����',
   MENU_ORDER           varchar(10) not null comment '�˵�˳��',
   MENU_URL             varchar(256) comment '�˵���������',
   MENU_DESCR           varchar(60) comment '�˵�����menu_descr',
   MENU_IMG             varchar(60) comment '�˵�ͼ��',
   STATUS               varchar(1) comment '�˵�״̬������->״̬��(0-��Ч; 1-��Ч)',
   CREATED_BY           varchar(20) not null comment '������',
   CREATED_DATE         date not null comment '����ʱ��',
   UPDATED_BY           varchar(20) not null comment '������',
   UPDATED_DATE         date not null comment '����ʱ��',
   primary key (UID, SYS_NO, MENU_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;
alter table IFDP_SYS_MENU_FUNC comment 'ϵͳ�˵���';

/*==============================================================*/
/* Table: IFDP_SYS_MENU_FUNC                                         */
/*==============================================================*/
create table IFDP_SYS_MENU_FUNC
(
   UID                  varchar(32) not null comment '�⻧ID',
   SYS_NO               varchar(1) not null comment 'ϵͳ���',
   MENU_NO              varchar(16) not null comment '�˵����',
   BSN_NO               varchar(16) not null comment '���ܱ��',
   CREATED_BY           varchar(20) not null comment '������',
   CREATED_DATE         date not null comment '����ʱ��',
   UPDATED_BY           varchar(20) not null comment '������',
   UPDATED_DATE         date not null comment '����ʱ��',
   REMARK               varchar(256) comment '��ע',
   primary key (UID, SYS_NO, BSN_NO, MENU_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_MENU_FUNC comment 'IFDP_SYS_MENU_FUNC';

/*==============================================================*/
/* Table: IFDP_SYS_REL_ROLE_BSN                                      */
/*==============================================================*/
create table IFDP_SYS_REL_ROLE_BSN
(
   UID                  varchar(32) not null comment '�⻧ID',
   ROLE_NO              varchar(16) not null comment '��ɫ���',
   BSN_NO               varchar(16) not null comment '���ܱ��',
   STATUS               varchar(1) comment '״̬������->״̬��(0-��Ч; 1-��Ч)',
   CREATED_BY           varchar(20) not null comment '������',
   CREATED_DATE         date not null comment '����ʱ��',
   UPDATED_BY           varchar(20) not null comment '������',
   UPDATED_DATE         date not null comment '����ʱ��',
   REMARK               varchar(256) comment '����',
   primary key (UID, BSN_NO, ROLE_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_REL_ROLE_BSN comment '��ɫ���ܹ�ϵ�� SYS_REL_ROLE_BSN';

/*==============================================================*/
/* Table: IFDP_SYS_REL_USER_ROLE                                     */
/*==============================================================*/
create table IFDP_SYS_REL_USER_ROLE
(
   UID                  varchar(32) not null comment '�⻧ID',
   USER_NO              varchar(20) not null comment '�û����',
   ROLE_NO              varchar(16) not null comment '��ɫ���',
   STATUS               varchar(1) comment '������->״̬��(0-��Ч; 1-��Ч)��Ĭ�ϣ�1',
   CREATED_BY           varchar(20) not null comment '������',
   CREATED_DATE         date not null comment '����ʱ��',
   UPDATED_BY           varchar(20) not null comment '������',
   UPDATED_DATE         date not null comment '����ʱ��',
   REMARK               varchar(256) comment '��ע',
   primary key (USER_NO, ROLE_NO, UID)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_REL_USER_ROLE comment '�û���ɫ��ϵ��SYS_REL_USER_ROLE';

/*==============================================================*/
/* Table: IFDP_SYS_ROLE                                              */
/*==============================================================*/
create table IFDP_SYS_ROLE
(
   UID                  varchar(32) not null comment '�⻧ID',
   ROLE_NO              varchar(16) not null comment '��ɫ����',
   ROLE_NAME            varchar(60) not null comment '��ɫ����',
   ROLE_DESCR           varchar(60) comment '��ɫ����',
   ROLE_STATUS          varchar(1) comment '״̬������->״̬��(0-��Ч; 1-��Ч)',
   CREATED_BY           varchar(20) not null comment '������',
   CREATED_DATE         date not null comment '����ʱ��',
   UPDATED_BY           varchar(20) not null comment '������',
   UPDATED_DATE         date not null comment '����ʱ��',
   primary key (UID, ROLE_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_ROLE comment '��ɫ��SYS_ROLE';

/*==============================================================*/
/* Table: IFDP_SYS_USER_BASE                                    */
/*==============================================================*/
create table IFDP_SYS_USER_BASE
(
   UID                  varchar(32) not null comment '�⻧ID',
   USER_NO              varchar(16) not null comment '�û���ţ�Ĭ��Ա����',
   LOG_NAME             varchar(30) comment '��¼��',
   CERT_NO              varchar(20) comment '֤������',
   MOBILE_TEL           varchar(20) not null comment '�ƶ��绰',
   EMAIL                varchar(50) not null comment '��������',
   ORGAN_NO             varchar(20) not null comment '��������',
   STATUS               varchar(1) not null comment '�û�״̬0 ����  1 ͣ��  2 ���� Ĭ�ϣ�0',
   PSWD                 varchar(64) comment '��¼����',
   PSWD_LEVEL           varchar(1) comment '��¼����ǿ��',
   REMARK               varchar(60) comment '��ע',
   CREATED_BY           varchar(20) not null comment '������',
   CREATED_DATE         date not null comment '����ʱ��',
   UPDATED_BY           varchar(20) not null comment '������',
   UPDATED_DATE         date not null comment '����ʱ��',
   primary key (UID, USER_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_USER_BASE comment '�û�������Ϣ��SYS_USER_BASE';

