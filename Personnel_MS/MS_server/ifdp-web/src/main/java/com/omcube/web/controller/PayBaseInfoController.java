package com.omcube.web.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.omcube.model.po.EpPayBaseInfoPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.request.QueryPayBaseInfoRequest;
import com.omcube.model.response.PayBaseInfoListResponse;
import com.omcube.service.PayBaseInfoService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.Result;
import com.omcube.util.SysLoginCtrlUtil;

/**
 * 薪酬福利基数管理controllser
 * @author jinx
 *
 */
@RestController
@RequestMapping(value = "pay")
public class PayBaseInfoController {

    protected final Log logger = LogFactory.getLog(getClass());

    private static final int CONTANT_TWENTY_THS = 20000;

    @Autowired
    private PayBaseInfoService payBaseInfoService;

    /**
     * 添加员工薪酬基数
     * url：/pay/addPayBaseInfo
     * @return
     */
    @PostMapping(value = "/addPayBaseInfo")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object addPayBaseInfo(@Valid EpPayBaseInfoPO epPayBaseInfo, BindingResult bindingResult) {
	//参数校验
	if (bindingResult.hasErrors()) {
	    logger.error("the request params is invalid");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    bindingResult.getFieldError().getDefaultMessage());
	}
	//从session中获取缓存值
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getuId();
	//校验remark  如果基本工资超过职级最大范围工资必须备注

	double salaryTop = payBaseInfoService.querySalaryTopByUserNo(uid, epPayBaseInfo.getUserNo());
	logger.debug(String.format("the salaryTop is :%s ", salaryTop));

	if (epPayBaseInfo.getWagesBase() > salaryTop && StringUtils.isEmpty(epPayBaseInfo.getRemark())) {
	    logger.error("the remark is must not be null when the wage base is over the top limit.");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the remark is must not be null when the wage base is over the salary top: " + salaryTop);
	}

	epPayBaseInfo.setuId(uid);
	epPayBaseInfo.setCreatedBy(sysLoginCtrl.getUserName());
	epPayBaseInfo.setUpdatedBy(sysLoginCtrl.getUserName());
	payBaseInfoService.addPayBaseInfo(epPayBaseInfo);

	return JSONResultUtil.setSuccess();
    }

    @GetMapping(value = "/queryPayBaseInfoList")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryPayBaseInfoList(@Valid QueryPayBaseInfoRequest queryPayBaseInfoReq,
	    BindingResult bindingResult) {
	//参数校验
	if (bindingResult.hasErrors()) {
	    logger.error("the request params is invalid");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    bindingResult.getFieldError().getDefaultMessage());
	}
	//校正分页属性
	checkPageParam(queryPayBaseInfoReq);
	//获取缓存uid
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	queryPayBaseInfoReq.setUid(sysLoginCtrl.getuId());
	//分页返回
	Result<PayBaseInfoListResponse> result = new Result<>();
	Page<PayBaseInfoListResponse> page = PageHelper.startPage(queryPayBaseInfoReq.getPageNum(),
		queryPayBaseInfoReq.getPageSize(), true);
	List<PayBaseInfoListResponse> payBaseInfoList = payBaseInfoService.queryPayBaseInfoList(queryPayBaseInfoReq);

	long totalNum = page.getTotal();
	result.setTotal(totalNum);
	result.setModels(payBaseInfoList);
	logger.debug(String.format("queryUser is end  total numbers is :%s", totalNum));

	return JSONResultUtil.setSuccess(result);

    }

    @GetMapping(value = "/queryPayBaseInfoDetail/{userNo}")
    public Object queryPayBaseInfoDetail(@PathVariable String userNo) {
	if (StringUtils.isEmpty(userNo)) {
	    logger.error("the request userNo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request userNo is null");
	}
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getuId();
	logger.info(String.format("the request param uid:%s, userNo:%s", uid, userNo));
	EpPayBaseInfoPO epPayBaseInfo = payBaseInfoService.queryPayBaseInfoDetail(uid, userNo);

	return JSONResultUtil.setSuccess(epPayBaseInfo);
    }

    @PutMapping(value = "/updatePayBaseInfo")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object updatePayBaseInfo(@Valid EpPayBaseInfoPO epPayBaseInfo, BindingResult bindingResult) {
	//参数校验
	if (bindingResult.hasErrors()) {
	    logger.error("the request params is invalid");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    bindingResult.getFieldError().getDefaultMessage());
	}
	//从session中获取缓存值
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getuId();

	//校验remark  如果基本工资超过职级最大范围工资必须备注
	double salaryTop = payBaseInfoService.querySalaryTopByUserNo(uid, epPayBaseInfo.getUserNo());
	logger.debug(String.format("the salaryTop is :%s ", salaryTop));

	if (epPayBaseInfo.getWagesBase() > salaryTop && StringUtils.isEmpty(epPayBaseInfo.getRemark())) {
	    logger.error("the remark is must not be null when the wage base is over the top limit.");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the remark is must not be null when the wage base is over the salary top: " + salaryTop);
	}

	epPayBaseInfo.setuId(uid);
	epPayBaseInfo.setUpdatedBy(sysLoginCtrl.getUserName());

	//更新
	payBaseInfoService.updatePayBaseInfo(epPayBaseInfo);

	return JSONResultUtil.setSuccess();
    }

    @DeleteMapping(value = "deletePayBaseInfo/{userNo}")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object deletePayBaseInfo(@PathVariable String userNo) {
	if (StringUtils.isEmpty(userNo)) {
	    logger.error("the request userNo is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request userNo is null");
	}
	//session 获取值
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getuId();
	String updatedBy = sysLoginCtrl.getUserName();

	Map<String, String> params = new HashMap<String, String>();
	makeMap(uid, userNo, updatedBy, params);

	//删除
	payBaseInfoService.deletePayBaseInfo(params);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 数据批量导出  先全部导出 
     *  默认每个sheet 最大20000条数据
     */
    @GetMapping(value = "/PayBaseDataExport")
    public Object PayBaseDataExport(HttpServletResponse response) {
	//定义标题
	String[] headers = getPayBaseInfoHeaders();
	//查询总条数每sheet 20000
	String uid = SysLoginCtrlUtil.getSysLoginCtrlBySession().getuId();
	long count = payBaseInfoService.queryPayBaseInfoCount(uid);
	int totalsheets = (int) (count % CONTANT_TWENTY_THS > 0 ? count / CONTANT_TWENTY_THS + 1
		: count / CONTANT_TWENTY_THS);
	//生成excel文件
	Workbook workBook = new HSSFWorkbook();
	for (int i = 0; i < totalsheets; i++) {
	    //分页查询数据
	    List<EpPayBaseInfoPO> epPayBaseList = payBaseInfoService.queryPayBaseInfoLimit(i * CONTANT_TWENTY_THS,
		    (i + 1) * CONTANT_TWENTY_THS, uid);
	    if (CollectionUtils.isEmpty(epPayBaseList)) {
		logger.warn("this is not data when query pay base info");
		continue;
	    }
	    else {
		//创建sheet
		Sheet sheet = workBook.createSheet("薪酬基础信息" + (i + 1));
		sheet.setDefaultColumnWidth(15);

		Row row = sheet.createRow(0);
		//写入标题
		for (int j = 0; j < headers.length; j++) {
		    //设置头部样式 宋体  12  加粗 居中
		    Cell cell = row.createCell(j);
		    cell.setCellStyle(getCellStyle(workBook));
		    //写入数据
		    cell.setCellValue(headers[j]);
		}

		//写入数据
		for (int n = 0; n < epPayBaseList.size(); n++) {
		    EpPayBaseInfoPO epPayBaseInfoPO = epPayBaseList.get(n);
		    Field[] fields = ArrayUtils.addAll(epPayBaseInfoPO.getClass().getDeclaredFields(),
			    epPayBaseInfoPO.getClass().getSuperclass().getDeclaredFields());
		    row = sheet.createRow(n + 1);
		    for (int j = 0; j < headers.length; j++) {
			//添加excel 数据
			Field field = fields[j];
			field.setAccessible(true);
			Object objValue = "";
			try {
			    objValue = field.get(epPayBaseInfoPO);
			}
			catch (IllegalArgumentException | IllegalAccessException e) {
			    logger.error(String.format(" get field %s value is error.", field.getName()));
			}

			Cell cell = row.createCell(j);
			if (objValue instanceof Date) {
			    cell.setCellValue(formatDate((Date) objValue, "yyyy-MM-dd"));
			}
			else {
			    cell.setCellValue(objValue.toString());
			}
			cell.setCellStyle(getgetCellStyleCenter(workBook));
		    }
		}
	    }
	}
	String fileName = "薪酬基础信息表.xls";
	//返回workBook以供下载
	OutputStream out = null;
	try {
	    response.setHeader("Content-Disposition",
		    "attachment;filename=" + new String(fileName.getBytes("utf-8"), "iso8859-1"));
	    response.setContentType("application/ynd.ms-excel;charset=UTF-8");
	    out = response.getOutputStream();
	    workBook.write(out);

	}
	catch (IOException e) {
	    logger.error("IOException err");
	}
	finally {
	    //关闭
	    try {
		if (out != null) {
		    out.close();
		}
	    }
	    catch (IOException e) {
		logger.error("IOException err");
	    }
	}
	return JSONResultUtil.setSuccess();
    }

    public static String formatDate(Date date, String format) {
	String result = "";
	SimpleDateFormat sdf = new SimpleDateFormat(format);
	if (date != null) {
	    result = sdf.format(date);
	}
	return result;
    }

    /**
     * 设置头部样式 宋体  11  加粗 居中
     * @return
     */
    private CellStyle getCellStyle(Workbook workBook) {
	Font font = workBook.createFont();
	font.setFontName("宋体");
	font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);//加粗
	font.setFontHeightInPoints((short) 11);//大小
	CellStyle cellStyle = workBook.createCellStyle();
	cellStyle.setFont(font);
	cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);//居中
	return cellStyle;
    }

    private CellStyle getgetCellStyleCenter(Workbook workBook) {
	CellStyle cellStyle = workBook.createCellStyle();
	cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);//居中
	return cellStyle;
    }

    private void makeMap(String uid, String userNo, String updatedBy, Map<String, String> params) {
	params.put("uid", uid);
	params.put("userNo", userNo);
	params.put("updatedBy", updatedBy);
    }

    private void checkPageParam(QueryPayBaseInfoRequest queryPayBaseInfoReq) {
	if (queryPayBaseInfoReq.getPageNum() <= 0) {
	    queryPayBaseInfoReq.setPageNum(ConstantUtil.DEFAULT_PAGE_NUM);
	}
	if (queryPayBaseInfoReq.getPageSize() <= 0) {
	    queryPayBaseInfoReq.setPageSize(ConstantUtil.DEFAULT_PAGE_SIZE);
	}
	if (queryPayBaseInfoReq.getPageSize() > 100) {
	    queryPayBaseInfoReq.setPageSize(ConstantUtil.DEFAULT_MAX_PAGE_SIZE);
	}
    }

    private String[] getPayBaseInfoHeaders() {
	return new String[] { "工号", "基础工资", "绩效工资", "岗位补贴", "其他补贴", "养老保险基数", "医疗保险基数", "失业保险基数", "工伤保险基数", "生育保险基数",
		"公积金基数", "试用期比例", "保险缴纳标准", "备注", "薪酬状态", "创建日期", "更新日期", "创建人", "更新人" };
    }
}
