drop table if exists EP_CUST_INFO;

/*==============================================================*/
/* Table: EP_CUST_INFO                                          */
/*==============================================================*/
create table EP_CUST_INFO
(
   UID                  VARCHAR(32) not null comment 'UID',
   USER_NO              VARCHAR(16) not null comment '用户编号',
   CUST_NAME            VARCHAR(32) not null comment '用户姓名',
   ORGAN_NO             VARCHAR(20) not null comment '公司ID',
   DERP_NO              VARCHAR(20) not null comment '部门ID',
   OWNER_CCC            VARCHAR(32) not null comment '所属CCC',
   CERT_TYPE            VARCHAR(2) not null comment '证件类型
            参数表：CERT_TYPE
            01	身份证
            02	户口本
            03	护照
            04	士兵或军官证
            99	其他唯一标识号
            ',
   CERT_NO              VARCHAR(20) not null comment '证件号码',
   SEX                  VARCHAR(2) not null comment '性别
            参数表：SEX
            01	男
            02	女
            99	其他',
   BIRTHDAY             VARCHAR(15) not null comment '出生日期',
   NATION               VARCHAR(15) not null comment '民族
            参数表：NATION
            01	汉族
            02	蒙古族
            03	回族
            04	藏族
            05	维吾尔族
            06	苗族
            07	彝族
            08	壮族
            09	布依族
            10	朝鲜族
            11	满族
            12	侗族
            13	瑶族
            14	白族
            15	土家族
            16	哈尼族
            17	哈萨克族
            18	傣族
            19	黎族
            20	傈僳族
            21	佤族
            22	畲族
            23	高山族
            24	拉祜族
            25	水族
            26	东乡族
            27	纳西族
            28	景颇族
            29	柯尔克孜　
            30	土族
            31	达斡尔族
            32	仫佬族
            33	羌族
            34	布朗族
            35	撒拉族
            36	毛难族
            37	仡佬族
            38	锡伯族
            39	阿昌族
            40	普米族
            41	塔吉克族
            42	怒族
            43	乌孜别克
            44	俄罗斯族
            45	鄂温克族
            46	崩龙族
            47	保安族
            48	裕固族
            49	京族
            50	塔塔尔族
            51	独龙族
            52	鄂伦春族
            53	赫哲族
            54	门巴族
            55	珞巴族
            56	基诺族
            57	其他
            58	外国血统中国籍人士
            ',
   MARITAL              VARCHAR(2) comment '婚姻状况
            参数表：MARITAL
            01	未婚
            02	已婚
            03	离异
            04	不详
            ',
   POLITIAL             VARCHAR(2) comment '政治面貌
            参数表：POLITIAL
            01	群众
            02	团员
            03	党员
            99	其他
            ',
   EDUCATION            VARCHAR(2) comment '学历
            参数表：EDUCATION
            01	高中以下
            02	高中
            03	大专
            04	本科
            05	硕士
            06	博士
            07	博士以上
            99	其他
            ',
   DEGREE               VARCHAR(12) comment '学位
            参数表：DEGREE
            01	高中以下
            02	高中
            03	大专
            04	本科
            05	硕士
            06	博士
            07	博士以上
            99	其他
            ',
   GRAD_SCHOOL          VARCHAR(64) comment '毕业学校',
   GRAD_TIME            VARCHAR(15) comment '毕业时间',
   MAJOR                VARCHAR(64) comment '专业',
   LINE_MANAGER         VARCHAR(15) comment '直线经理',
   ORIGO                VARCHAR(150) comment '籍贯',
   HOME_ADDR            VARCHAR(150) comment '家庭地址',
   LIVE_ADDR            VARCHAR(150) comment '居住地',
   PERM_ADDR            VARCHAR(150) comment '户口地址',
   MOBILE_NO            VARCHAR(11) comment '手机',
   TELEPH               VARCHAR(32) comment '电话',
   HOME_TELEPH          VARCHAR(32) comment '家庭电话',
   PER_EMAIL            VARCHAR(64) comment '个人邮箱',
   COM_EMAIL            VARCHAR(64) comment '公司邮箱',
   ATTEN                VARCHAR(32) comment '紧急联系人',
   ATTEN_TELEPH         VARCHAR(32) comment '紧急联系人电话',
   QQ_ACCT              VARCHAR(20) comment 'QQ',
   ONE_INCH             VARCHAR(100) comment '免冠照片',
   CUST_TYPE            VARCHAR(2) comment '员工类别
            参数表：CUST_TYPE
            01	在编
            02	借用
            03	合同制
            04	兼职
            05	实习
            99	其他
            ',
   CUST_POST            VARCHAR(8) comment '岗位',
   CUST_CLASS           VARCHAR(8) comment '职级',
   CUST_STATUS          VARCHAR(2) comment '状态
            参数表：CUST_STATUS
            01	试用期
            02	合同期
            03	已退休
            04	已离职
            05	停薪留职
            ',
   ENTRY_TIME           DATE comment '入职时间',
   LEFTJOB_TIME         DATE comment '上岗时间',
   WORK_TIME            DATE comment '工作日期',
   PROFTITLE_TIME       DATE comment '职称日期',
   COMPACT_START_TIME   DATE comment '合同开始',
   COMPACT_END_TIME     DATE comment '合同终止',
   PROB_START_TIME      DATE comment '试用开始',
   PROB_END_TIME        DATE comment '试用结束',
   RECRUIT_QUARRY       VARCHAR(2) comment '招聘来源
            参数表：RECRUIT_QUARRY
            01	网上招聘
            02	内部推荐
            03	现场招聘
            99	其他
            ',
   LATE_LEAVE_TIME      DATE comment '最近离职时间',
   OPEN_BANK            VARCHAR(64) comment '开户银行',
   BANK_CARD_NO         VARCHAR(20) comment '银行卡号',
   ENDM_ACCT            VARCHAR(32) comment '养老保险账号',
   MEDI_ACCT            VARCHAR(32) comment '医保账号',
   MATE_ACCT            VARCHAR(32) comment '生育账号',
   HOUS_ACCT            VARCHAR(32) comment '公积金账号',
   ATTACHM              VARCHAR(100) comment '附件',
   REMARK               VARCHAR(2000) comment '备注',
   CREATED_BY           VARCHAR2(100) comment '创建人',
   CREATED_DATE         DATE comment '创建时间',
   UPDATED_BY           VARCHAR2(100) comment '更新人',
   UPDATED_DATE         DATE comment '更新时间',
   primary key (UID, USER_NO)
);

alter table EP_CUST_INFO comment '用户基础信息表';

/*==============================================================*/
/* Method: insertCustInfo    按规则新增员工编号                                         */
/*==============================================================*/
DELIMITER $$

CREATE
   begin 
    DECLARE maxUserNo varchar(8);
    SELECT user_no into maxUserNo from EP_CUST_INFO where uid = new.uid order by user_no  desc limit 1;
    if maxUserNo is null then 
    set maxUserNo = 'P0000000';
    end if ;
    set new.user_no =  CONCAT('P',LPAD(right(maxUserNo,7)+1,7,'0'));
   END$$

DELIMITER ;


drop table if exists EP_ORGAN_BILLINFO;

/*==============================================================*/
/* Table: EP_ORGAN_BILLINFO                                     */
/*==============================================================*/
create table EP_ORGAN_BILLINFO
(
   UID                  varchar(32) not null comment 'UID',
   ORGAN_NO             varchar(20) not null comment '机构号',
   ORGAN_NAME           varchar(120) not null comment '公司名称',
   ORGAN_TAXNO         varchar(20) not null comment '纳税人编号',
   ORGAN_TEL            varchar(20) comment '电话',
   ORGAN_ACCT           varchar(32) comment '账户',
   ORGAN_ACCTNAME       varchar(120) comment '账户名称',
   ORGAN_ADDR           varchar(120) comment '公司地址',
   CREATED_BY           varchar(20) not null comment '创建人',
   CREATED_DATE         date not null comment '创建时间',
   UPDATED_BY           varchar(20) not null comment '更新人',
   UPDATED_DATE         date not null comment '更新时间',
   primary key (UID, ORGAN_NO)
);

alter table EP_ORGAN_BILLINFO comment '公司开票信息';
