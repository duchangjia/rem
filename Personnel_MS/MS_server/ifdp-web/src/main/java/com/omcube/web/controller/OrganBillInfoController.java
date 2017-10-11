package com.omcube.web.controller;

import java.text.ParseException;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.druid.util.StringUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.EpOrganBillInfoPO;
import com.omcube.service.OrganBillInfoService;
import com.omcube.service.OrganService;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;

/**
 * 公司开票信息维护
 * 
 * @author rongxing
 * @version 1.0
 */

@RestController
@RequestMapping(value = "/organBillInfo")
public class OrganBillInfoController {

    protected final Log logger = LogFactory.getLog(getClass());

    @Autowired
    private OrganBillInfoService billInfoService;

    @Autowired
    private OrganService organService;

    /**
     * 新增开票信息	
     * 
     * @param uId
     * @return
     * @throws ParseException
     */
    @PostMapping(value = "/addOrganBillInfo")
    public Object addOrganBillInfo(EpOrganBillInfoPO billInfo) throws ParseException {

	//校验机构是否存在
	if (organService.queryCurrentOrgan(billInfo.getOrganNo()) == null) {
	    logger.error("the organ does not exit");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the organ does not exit");
	}

	//校验是否重复开票
	if (billInfoService.queryBillInfo(billInfo.getOrganNo()) != null) {
	    logger.error("公司开票信息已经存在");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "公司开票信息已经存在");
	}

	billInfoService.addOrganBillInfo(billInfo);
	logger.info("uid:" + billInfo.getuId() + "organName" + billInfo.getOrganName() + "新增公司信息成功");
	return JSONResultUtil.setSuccess();
    }

    /**
     * 修改开票信息
     * 
     * @return
     * @throws ParseException
     */
    @PutMapping(value = "/updateOrganBillInfo")
    public Object updateOrganBillInfo(EpOrganBillInfoPO billInfoPO) throws ParseException {

	billInfoService.updateOrganBillInfo(billInfoPO);
	logger.info("uid:" + billInfoPO.getuId() + "organName" + billInfoPO.getOrganName() + "修改公司信息成功");
	return JSONResultUtil.setSuccess();
    }

    /**
     * 查询公司开票信息列表
     * 
     * @param uId
     * @param request
     * @param pageNum
     * @param pageSize
     * @return
     */
    @GetMapping(value = "/queryBillInfoList/{uId}")
    public Object quetyBillInfoList(@PathVariable String uId, Integer pageNum, Integer pageSize) {

	if (StringUtils.isEmpty(uId)) {
	    logger.error("the request param uId is null");
	    return JSONResultUtil.setError("ErrorCodeConstantUtil.REQUEST_INVALID_ERR",
		    "the request param uId is null");
	}

	pageNum = pageNum == null ? 1 : pageNum;
	pageSize = pageSize == null ? 5 : pageSize;
	PageHelper.startPage(pageNum, pageSize, true);
	List<EpOrganBillInfoPO> billInfoPOList = billInfoService.queryBillInfoList(uId);
	PageInfo<EpOrganBillInfoPO> pageInfo = new PageInfo<EpOrganBillInfoPO>(billInfoPOList);

	return JSONResultUtil.setSuccess(pageInfo);
    }

    /**
     * 根据名称模糊查询开票信息
     * 
     * @param uId
     * @param organName
     * @param request
     * @param pageNum
     * @param pageSize
     * @return
     */
    @GetMapping(value = "/queryBillInfoByName")
    public Object queryBillInfoByName(EpOrganBillInfoPO billInfoPO, Integer pageNum, Integer pageSize) {

	pageNum = pageNum == null ? 1 : pageNum;
	pageSize = pageSize == null ? 5 : pageSize;
	//分页
	PageHelper.startPage(pageNum, pageSize, true);
	List<EpOrganBillInfoPO> billInfoPOList = billInfoService.queryBillInfoByName(billInfoPO);
	PageInfo<EpOrganBillInfoPO> pageInfo = new PageInfo<EpOrganBillInfoPO>(billInfoPOList);

	return JSONResultUtil.setSuccess(pageInfo);
    }

    /**
     * 查询公司开票信息
     * 
     * @param organNo
     * @return
     */
    @GetMapping(value = "/queryBillInfo")
    public Object queryBillInfo(String organNo) {
	EpOrganBillInfoPO billInfoPO = billInfoService.queryBillInfo(organNo);
	System.out.println("yyyyyyyyyyyyyy");
	System.out.println(billInfoPO == null);
	return JSONResultUtil.setSuccess(billInfoPO);
    }
}
