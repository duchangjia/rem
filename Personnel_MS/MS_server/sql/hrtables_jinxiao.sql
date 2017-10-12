drop table if exists IFDP_SYS_ORGAN_BASE;
/*==============================================================*/
/* Table: IFDP_SYS_ORGAN_BASE                                              */
/*==============================================================*/
create table IFDP_SYS_ORGAN_BASE
(
   UID                  varchar(32) not null comment '�⻧ID',
   ORGAN_NO             varchar(20) not null comment '������',
   ORGAN_NAME           varchar(120) not null comment '��������',
   ORGAN_TYPE           varchar(2) not null comment '�������� 01�ܹ�˾  02 �ֹ�˾ 03 ���´�  04 ����',
   ORGAN_STATUS         varchar(2) not null comment '����״̬
            ������->0-ͣ��; 1-����',
   PARENT_NO            varchar(20) comment '�ϼ�����',
   ORGAN_LEVEL          varchar(1) not null comment '��������',
   ORGAN_DESCR          varchar(60) comment '��������',
   ORG_PATH             varchar(120) comment '�����㼶����',
   CREATED_BY           varchar(20) not null comment '������',
   CREATED_DATE         date not null comment '����ʱ��',
   UPDATED_BY           varchar(20) not null comment '������',
   UPDATED_DATE         date not null comment '����ʱ��',
   primary key (UID, ORGAN_NO)
)ENGINE=InnoDB DEFAULT CHARSET=UTF8;

alter table IFDP_SYS_ORGAN_BASE comment '�����������Ϣ��SYS_ORGAN_BASE 
��¼�����Ļ�����Ϣ������Ϊ������Ϣ������Ӧ���Ÿ������Ա�';



DROP FUNCTION IF EXISTS queryChildrenOrganInfo

/*==============================================================*/
/* Method: queryChildrenOrganInfo    ��ѯ�����µ������Ӳ���Id                                         */
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
/* Method: queryBelongOrganByUserNo    ��ѯ�û����������ĸ��������ܹ�˾���߷ֹ�˾��                                         */
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

