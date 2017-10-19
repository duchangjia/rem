package com.omcube.web.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.EpAssetInfPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.service.EpAssetInfService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

@RestController
@RequestMapping(value = "/EpAssetInf")
public class EpAssetInfController {

    @Autowired
    private EpAssetInfService epAssetInfService;

    /**
     * 1.添加资产信息
     * @param epAssetInf
     * @return
     */
    @PostMapping(value = "/addEpAssetInf")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object addEpAssetInf(EpAssetInfPO epAssetInf, @RequestParam("file") MultipartFile file) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	String createdBy = sysLoginCtrl.getCreatedBy();
	epAssetInf.setuId(uId);
	epAssetInf.setCreatedBy(createdBy);
	//校验
	if (StringUtils.isEmpty(epAssetInf)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	if (StringUtils.isEmpty(epAssetInf.getuId()) || StringUtils.isEmpty(epAssetInf.getAssetNo())
		|| StringUtils.isEmpty(epAssetInf.getOrganNo()) || StringUtils.isEmpty(epAssetInf.getDerpNo())
		|| StringUtils.isEmpty(epAssetInf.getApplyUserNo())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uId,assetNo,organNo,derpNo or applyUserNo is null");
	}
	//文件上传
	/*if (file.isEmpty()) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "Upload files to empty!");
	}
	String fileName = file.getOriginalFilename();
	int size = (int) file.getSize();
	System.out.println(fileName + "--->" + size);
	String path = "d:/fileUpload";
	File dest = new File(path + "/" + fileName);
	if (!dest.getParentFile().exists()) {
	    dest.getParentFile().mkdir();
	}
	try {
	    file.transferTo(dest);
	}
	catch (IllegalStateException e) {
	    e.printStackTrace();
	}
	catch (IOException e) {
	    e.printStackTrace();
	}*/

	epAssetInfService.addEpAssetInf(epAssetInf);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 2.根据uid和资产编号assetNo查询资产的详细信息
     * @param assetNo
     * @return
     */
    @GetMapping(value = "queryEpAssetInf/{assetNo}")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryEpAssetInf(@PathVariable String assetNo) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	if (StringUtils.isEmpty(uId) || StringUtils.isEmpty(assetNo)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uId or assetNo is null");
	}
	return JSONResultUtil.setSuccess(epAssetInfService.queryEpAssetInf(uId, assetNo));
    }

    /**
     * 3.修改资产信息
     * @param epAssetInf
     * @return
     */
    @PutMapping(value = "/updateEpAssetInf")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object updateEpAssetInf(EpAssetInfPO epAssetInf) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	String updatedBy = sysLoginCtrl.getUpdatedBy();
	//将获取到的uid 和 updatedBy放入到epAssetInf
	epAssetInf.setuId(uId);
	epAssetInf.setUpdatedBy(updatedBy);
	//校验
	if (StringUtils.isEmpty(epAssetInf)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	if (StringUtils.isEmpty(epAssetInf.getuId()) || StringUtils.isEmpty(epAssetInf.getAssetNo())
		|| StringUtils.isEmpty(epAssetInf.getOrganNo()) || StringUtils.isEmpty(epAssetInf.getDerpNo())
		|| StringUtils.isEmpty(epAssetInf.getApplyUserNo())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uId,assetNo,organNo,derpNo or applyUserNo is null");
	}
	epAssetInfService.updateEpAssetInf(epAssetInf);
	return JSONResultUtil.setSuccess();
    }

    @GetMapping(value = "queryEpAssetInfs")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryEpAssetInfs(Integer pageNum, Integer pageSize, EpAssetInfPO epAssetInf) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uId = sysLoginCtrl.getuId();
	epAssetInf.setuId(uId);
	if (StringUtils.isEmpty(epAssetInf)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	PageHelper.startPage(pageNum, pageSize, true);
	List<EpAssetInfPO> epAssetInfs = epAssetInfService.queryEpAssetInfs(epAssetInf);
	PageInfo<EpAssetInfPO> pageInfo = new PageInfo<EpAssetInfPO>(epAssetInfs);
	return JSONResultUtil.setSuccess(pageInfo);
    }
}
