package com.omcube.web.controller;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
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
    public Object addEpAssetInf(EpAssetInfPO epAssetInf,
	    @RequestParam(value = "file", required = false) MultipartFile file) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	String createdBy = sysLoginCtrl.getCreatedBy();
	epAssetInf.setUid(uid);
	epAssetInf.setCreatedBy(createdBy);
	//校验
	if (StringUtils.isEmpty(epAssetInf)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	if (StringUtils.isEmpty(epAssetInf.getUid()) || StringUtils.isEmpty(epAssetInf.getAssetNo())
		|| StringUtils.isEmpty(epAssetInf.getOrganNo()) || StringUtils.isEmpty(epAssetInf.getDerpNo())
		|| StringUtils.isEmpty(epAssetInf.getApplyUserNo())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uid,assetNo,organNo,derpNo or applyUserNo is null");
	}
	//文件上传
	if (file != null) {
	    //获取UUID
	    String uuid = UUID.randomUUID().toString().replaceAll("-", "");
	    //获取文件名
	    String fileName = file.getOriginalFilename();
	    //获取文件类型
	    int index = fileName.lastIndexOf(".");
	    String type = fileName.substring(index);
	    //获取文件路径
	    String path = "d:/fileUpload";
	    //获取带文件名的绝对路径
	    path=path + "/" + uuid+ type;
	    //创建UUID唯一文件
	    File dest = new File(path);
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
	    }
	    //将上传文件路径写入epAssetInf
	    epAssetInf.setAttachm(path);
	}
	//执行添加操作
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
    public Object queryEpAssetInf(@PathVariable(value = "assetNo") String assetNo) {
	//从session 获取uid 
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	if (StringUtils.isEmpty(uid) || StringUtils.isEmpty(assetNo)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uid or assetNo is null");
	}
	return JSONResultUtil.setSuccess(epAssetInfService.queryEpAssetInf(uid, assetNo));
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
	String uid = sysLoginCtrl.getUid();
	String updatedBy = sysLoginCtrl.getUpdatedBy();
	//将获取到的uid 和 updatedBy放入到epAssetInf
	epAssetInf.setUid(uid);
	epAssetInf.setUpdatedBy(updatedBy);
	//校验
	if (StringUtils.isEmpty(epAssetInf)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	if (StringUtils.isEmpty(epAssetInf.getUid()) || StringUtils.isEmpty(epAssetInf.getAssetNo())
		|| StringUtils.isEmpty(epAssetInf.getOrganNo()) || StringUtils.isEmpty(epAssetInf.getDerpNo())
		|| StringUtils.isEmpty(epAssetInf.getApplyUserNo())) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param uid,assetNo,organNo,derpNo or applyUserNo is null");
	}
	epAssetInfService.updateEpAssetInf(epAssetInf);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 4.高级查询资产列表
     * @param pageNum
     * @param pageSize
     * @param epAssetInf
     * @return
     */
    @GetMapping(value = "/queryEpAssetInfs")
    @Cacheable(value = ConstantUtil.QUERY_CACHE)
    public Object queryEpAssetInfs(Integer pageNum, Integer pageSize, EpAssetInfPO epAssetInf) {
	//从session 获取uid ,userNo
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	//String userNo = sysLoginCtrl.getUserNo();
	epAssetInf.setUid(uid);
	if (StringUtils.isEmpty(epAssetInf)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	PageHelper.startPage(pageNum, pageSize, true);
	List<EpAssetInfPO> epAssetInfs = epAssetInfService.queryEpAssetInfs(epAssetInf);
	PageInfo<EpAssetInfPO> pageInfo = new PageInfo<EpAssetInfPO>(epAssetInfs);
	return JSONResultUtil.setSuccess(pageInfo);
    }

    /**
     * 5.删除资产信息
     * @param assetNo
     * @return
     */
    @DeleteMapping(value = "/deleteEpAssetInf/{assetNo}")
    @CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
    public Object deleteEpAssetInf(@PathVariable String assetNo) {
	//从session 获取uid ,updatedBy
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	String uid = sysLoginCtrl.getUid();
	String updatedBy = sysLoginCtrl.getUpdatedBy();
	if (StringUtils.isEmpty(assetNo) || StringUtils.isEmpty(uid)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
		    "the param assetNo or uid is null");
	}
	epAssetInfService.deleteEpAssetInf(assetNo, uid, updatedBy);
	return JSONResultUtil.setSuccess();
    }

    /**
     * 6.资产信息的附件下载
     * @param request
     * @param response
     * @param fileUrl
     * @return
     */
    @GetMapping(value = "/downloadFile")
    public Object downloadFile(HttpServletRequest request, HttpServletResponse response, String fileUrl) {
	if (StringUtils.isEmpty(fileUrl)) {
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the param fileUrl is null");
	}
	int index = fileUrl.lastIndexOf("/");
	String fileName = fileUrl.substring(index + 1);
	if (fileName != null) {
	    File file = new File(fileUrl);
	    if (file.exists()) {
		response.setContentType(/*"application/force-download"*/"application/octet-stream");// 设置强制下载不打开
		try {
		    response.addHeader("Content-Disposition",
			    "attachment;fileName=" + URLEncoder.encode(fileName, "UTF-8"));// 设置文件名	
		}
		catch (UnsupportedEncodingException e) {
		    e.printStackTrace();
		}
		byte[] buffer = new byte[1024];
		FileInputStream fis = null;
		BufferedInputStream bis = null;
		try {
		    fis = new FileInputStream(file);
		    bis = new BufferedInputStream(fis);
		    OutputStream os = response.getOutputStream();
		    int i = bis.read(buffer);
		    while (i != -1) {
			os.write(buffer, 0, i);
			i = bis.read(buffer);
		    }
		    System.out.println("success");
		}
		catch (Exception e) {
		    e.printStackTrace();
		}
		finally {
		    if (bis != null) {
			try {
			    bis.close();
			}
			catch (IOException e) {
			    e.printStackTrace();
			}
		    }
		    if (fis != null) {
			try {
			    fis.close();
			}
			catch (IOException e) {
			    e.printStackTrace();
			}
		    }
		}
	    }
	}
	return null;
    }
}
