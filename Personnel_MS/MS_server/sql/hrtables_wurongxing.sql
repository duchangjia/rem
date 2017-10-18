drop table if exists EP_CUST_INFO;

/*==============================================================*/
/* Table: EP_CUST_INFO                                          */
/*==============================================================*/
create table EP_CUST_INFO
(
   UID                  VARCHAR(32) not null comment 'UID',
   USER_NO              VARCHAR(16) not null comment '�û����',
   CUST_NAME            VARCHAR(32) not null comment '�û�����',
   ORGAN_NO             VARCHAR(20) not null comment '��˾ID',
   DERP_NO              VARCHAR(20) not null comment '����ID',
   OWNER_CCC            VARCHAR(32) not null comment '����CCC',
   CERT_TYPE            VARCHAR(2) not null comment '֤������
            ������CERT_TYPE
            01	���֤
            02	���ڱ�
            03	����
            04	ʿ�������֤
            99	����Ψһ��ʶ��
            ',
   CERT_NO              VARCHAR(20) not null comment '֤������',
   SEX                  VARCHAR(2) not null comment '�Ա�
            ������SEX
            01	��
            02	Ů
            99	����',
   BIRTHDAY             VARCHAR(15) not null comment '��������',
   NATION               VARCHAR(15) not null comment '����
            ������NATION
            01	����
            02	�ɹ���
            03	����
            04	����
            05	ά�����
            06	����
            07	����
            08	׳��
            09	������
            10	������
            11	����
            12	����
            13	����
            14	����
            15	������
            16	������
            17	��������
            18	����
            19	����
            20	������
            21	����
            22	���
            23	��ɽ��
            24	������
            25	ˮ��
            26	������
            27	������
            28	������
            29	�¶����Ρ�
            30	����
            31	���Ӷ���
            32	������
            33	Ǽ��
            34	������
            35	������
            36	ë����
            37	������
            38	������
            39	������
            40	������
            41	��������
            42	ŭ��
            43	���α��
            44	����˹��
            45	���¿���
            46	������
            47	������
            48	ԣ����
            49	����
            50	��������
            51	������
            52	���״���
            53	������
            54	�Ű���
            55	�����
            56	��ŵ��
            57	����
            58	���Ѫͳ�й�����ʿ
            ',
   MARITAL              VARCHAR(2) comment '����״��
            ������MARITAL
            01	δ��
            02	�ѻ�
            03	����
            04	����
            ',
   POLITIAL             VARCHAR(2) comment '������ò
            ������POLITIAL
            01	Ⱥ��
            02	��Ա
            03	��Ա
            99	����
            ',
   EDUCATION            VARCHAR(2) comment 'ѧ��
            ������EDUCATION
            01	��������
            02	����
            03	��ר
            04	����
            05	˶ʿ
            06	��ʿ
            07	��ʿ����
            99	����
            ',
   DEGREE               VARCHAR(12) comment 'ѧλ
            ������DEGREE
            01	��������
            02	����
            03	��ר
            04	����
            05	˶ʿ
            06	��ʿ
            07	��ʿ����
            99	����
            ',
   GRAD_SCHOOL          VARCHAR(64) comment '��ҵѧУ',
   GRAD_TIME            VARCHAR(15) comment '��ҵʱ��',
   MAJOR                VARCHAR(64) comment 'רҵ',
   LINE_MANAGER         VARCHAR(15) comment 'ֱ�߾���',
   ORIGO                VARCHAR(150) comment '����',
   HOME_ADDR            VARCHAR(150) comment '��ͥ��ַ',
   LIVE_ADDR            VARCHAR(150) comment '��ס��',
   PERM_ADDR            VARCHAR(150) comment '���ڵ�ַ',
   MOBILE_NO            VARCHAR(11) comment '�ֻ�',
   TELEPH               VARCHAR(32) comment '�绰',
   HOME_TELEPH          VARCHAR(32) comment '��ͥ�绰',
   PER_EMAIL            VARCHAR(64) comment '��������',
   COM_EMAIL            VARCHAR(64) comment '��˾����',
   ATTEN                VARCHAR(32) comment '������ϵ��',
   ATTEN_TELEPH         VARCHAR(32) comment '������ϵ�˵绰',
   QQ_ACCT              VARCHAR(20) comment 'QQ',
   ONE_INCH             VARCHAR(100) comment '�����Ƭ',
   CUST_TYPE            VARCHAR(2) comment 'Ա�����
            ������CUST_TYPE
            01	�ڱ�
            02	����
            03	��ͬ��
            04	��ְ
            05	ʵϰ
            99	����
            ',
   CUST_POST            VARCHAR(8) comment '��λ',
   CUST_CLASS           VARCHAR(8) comment 'ְ��',
   CUST_STATUS          VARCHAR(2) comment '״̬
            ������CUST_STATUS
            01	������
            02	��ͬ��
            03	������
            04	����ְ
            05	ͣн��ְ
            ',
   ENTRY_TIME           DATE comment '��ְʱ��',
   LEFTJOB_TIME         DATE comment '�ϸ�ʱ��',
   WORK_TIME            DATE comment '��������',
   PROFTITLE_TIME       DATE comment 'ְ������',
   COMPACT_START_TIME   DATE comment '��ͬ��ʼ',
   COMPACT_END_TIME     DATE comment '��ͬ��ֹ',
   PROB_START_TIME      DATE comment '���ÿ�ʼ',
   PROB_END_TIME        DATE comment '���ý���',
   RECRUIT_QUARRY       VARCHAR(2) comment '��Ƹ��Դ
            ������RECRUIT_QUARRY
            01	������Ƹ
            02	�ڲ��Ƽ�
            03	�ֳ���Ƹ
            99	����
            ',
   LATE_LEAVE_TIME      DATE comment '�����ְʱ��',
   OPEN_BANK            VARCHAR(64) comment '��������',
   BANK_CARD_NO         VARCHAR(20) comment '���п���',
   ENDM_ACCT            VARCHAR(32) comment '���ϱ����˺�',
   MEDI_ACCT            VARCHAR(32) comment 'ҽ���˺�',
   MATE_ACCT            VARCHAR(32) comment '�����˺�',
   HOUS_ACCT            VARCHAR(32) comment '�������˺�',
   ATTACHM              VARCHAR(100) comment '����',
   REMARK               VARCHAR(2000) comment '��ע',
   CREATED_BY           VARCHAR2(100) comment '������',
   CREATED_DATE         DATE comment '����ʱ��',
   UPDATED_BY           VARCHAR2(100) comment '������',
   UPDATED_DATE         DATE comment '����ʱ��',
   primary key (UID, USER_NO)
);

alter table EP_CUST_INFO comment '�û�������Ϣ��';

/*==============================================================*/
/* Method: insertCustInfo    ����������Ա�����                                         */
/*==============================================================*/
DELIMITER $$

CREATE
    /*[DEFINER = { user | CURRENT_USER }]*/
    TRIGGER `ifdp`.`insertCustInfo` BEFORE INSERT
    ON `ifdp`.`EP_CUST_INFO`
    FOR EACH ROW  BEGIN 
    DECLARE maxUserNo VARCHAR(8);
    SELECT user_no INTO maxUserNo FROM EP_CUST_INFO WHERE uid = new.uid ORDER BY user_no  DESC LIMIT 1;
    IF maxUserNo IS NULL THEN 
    SET maxUserNo = 'P0000000';
    END IF ;
    SET new.user_no =  CONCAT('P',LPAD(RIGHT(maxUserNo,7)+1,7,'0'));
   END$$

DELIMITER ;

drop table if exists EP_ORGAN_BILLINFO;

/*==============================================================*/
/* Table: EP_ORGAN_BILLINFO                                     */
/*==============================================================*/
create table EP_ORGAN_BILLINFO
(
   UID                  varchar(32) not null comment 'UID',
   ORGAN_NO             varchar(20) not null comment '������',
   ORGAN_NAME           varchar(120) not null comment '��˾����',
   ORGAN_TAXNO         varchar(20) not null comment '��˰�˱��',
   ORGAN_TEL            varchar(20) comment '�绰',
   ORGAN_ACCT           varchar(32) comment '�˻�',
   ORGAN_ACCTNAME       varchar(120) comment '�˻�����',
   ORGAN_ADDR           varchar(120) comment '��˾��ַ',
   CREATED_BY           varchar(20) not null comment '������',
   CREATED_DATE         date not null comment '����ʱ��',
   UPDATED_BY           varchar(20) not null comment '������',
   UPDATED_DATE         date not null comment '����ʱ��',
   primary key (UID, ORGAN_NO)
);

alter table EP_ORGAN_BILLINFO comment '��˾��Ʊ��Ϣ';
