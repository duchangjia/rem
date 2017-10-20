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
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.util.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.EpTravelPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.request.QueryTravelRequest;
import com.omcube.model.response.TravelResponse;
import com.omcube.service.EpTravelMangerService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.GetNumUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SysLoginCtrlUtil;

/**
 * 出差详情管理controller
 * 
 * @author kuangzhemin
 * @version 1.0
 */
@RestController
@RequestMapping(value = "/travel")
public class EpTravelMangerController {

    protected final Log logger = LogFactory.getLog(getClass());
    @Autowired
    private EpTravelMangerService epTravelMangerService;
    
    /**
     * 根据员工编号查询员工信息
     * 
     * @param queryTravelRequest
     * @return
     */
    @GetMapping(value = "/getUseInfoByUserNo")
    public Object getUseInfoByUserNo(QueryTravelRequest queryTravelRequest) {

	if (queryTravelRequest == null) {
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", queryTravelRequest.toString()));
	queryTravelRequest.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
	
	TravelResponse userInfo = epTravelMangerService.getUseInfoByUserNo(queryTravelRequest);
	return JSONResultUtil.setSuccess(userInfo);

    }
    
    
    /**
     * 出差的列表的查询
     * 
     * @param queryTravelRequest
     * @return
     */
    @GetMapping(value = "/queryTravelList")
    public Object queryTravelList(QueryTravelRequest queryTravelRequest) {

	if (queryTravelRequest == null) {
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", queryTravelRequest.toString()));
	QueryTravelRequest queryTravelParams = makeRequestPragram(queryTravelRequest);
	logger.debug(String.format("the pageNum is  :%s and the pageSize is :%s", queryTravelParams.getPageNum(),
		queryTravelParams.getPageSize()));

	PageHelper.startPage(queryTravelParams.getPageNum(), queryTravelParams.getPageSize(), true);
	List<TravelResponse> travelList = epTravelMangerService.queryTravelList(queryTravelParams);
	PageInfo<TravelResponse> pageInfo = new PageInfo<TravelResponse>(travelList);
	return JSONResultUtil.setSuccess(pageInfo);

    }

    /**
     * 新增出差信息:文件上传
     * 
     * @param epTravelPO
     * @return
     */
    @PutMapping(value = "/addTravelInfo")
    public Object addTravelInfo(@RequestBody EpTravelPO epTravelPO, MultipartFile file) {

	if (epTravelPO == null) {
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", epTravelPO.toString()));

	//储存租户uid和系统自动生成的出差编号
	epTravelPO.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
	String applyNo = GetNumUtil.getNo();
	epTravelPO.setApplyNo(applyNo);

	try {
	    if (!file.isEmpty()) {
		// 获的文件名
		String fileName = file.getOriginalFilename();
		// 获的文件的后缀
		String newFileName = UUID.randomUUID() + fileName.substring(fileName.lastIndexOf("."));
		// 文件上传的路劲
		String filePath = "e://attachm//";

		File newFile = new File(filePath + newFileName);

		if (!newFile.getParentFile().exists()) {
		    newFile.getParentFile().mkdirs();
		}

		file.transferTo(newFile);
		// 将文件全路径保存到数据库 
		epTravelPO.setAttachm(filePath + newFileName);
	    }

	    epTravelMangerService.addTravelInfo(epTravelPO);

	    return JSONResultUtil.setSuccess();

	}
	catch (Exception e) {
	    e.printStackTrace();
	}

	return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "add epTravelPO fail");

    }

    /**
     * 修改出差信息前：查询出差信息
     * 
     * @param queryTravelRequest
     * @return
     */
    @GetMapping(value = "/getTravelInfoByUserNo")
    public Object getTravelInfoByUserNo(QueryTravelRequest queryTravelRequest) {

	if (queryTravelRequest == null) {
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", queryTravelRequest.toString()));

	queryTravelRequest.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
	TravelResponse travelInfo = epTravelMangerService.getTravelInfoByApplyNo(queryTravelRequest);

	return JSONResultUtil.setSuccess(travelInfo);

    }

    /**
     * 更新出差信息
     * 
     * @param epTravelPO
     * @return
     */
    @PutMapping(value = "/modifyTravelInfo")
    public Object modifyTravelInfo(@RequestBody EpTravelPO epTravelPO, MultipartFile file) {

	if (epTravelPO == null) {
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", epTravelPO.toString()));

	epTravelPO.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());

	try {
	    if (!file.isEmpty()) {
		// 获的文件名
		String fileName = file.getOriginalFilename();
		// 获的文件的后缀
		String newFileName = UUID.randomUUID() + fileName.substring(fileName.lastIndexOf("."));
		// 文件上传的路劲
		String filePath = "e://attachm//";

		File newFile = new File(filePath + newFileName);

		if (!newFile.getParentFile().exists()) {
		    newFile.getParentFile().mkdirs();
		}

		file.transferTo(newFile);
		// 将文件全路径保存到数据库 
		epTravelPO.setAttachm(filePath + newFileName);
	    }

	    epTravelMangerService.modifyTravelInfo(epTravelPO);

	    return JSONResultUtil.setSuccess();

	}
	catch (Exception e) {
	    e.printStackTrace();
	}

	return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "update epTravelPO fail");

    }

    /**
     * 删除出差信息前：查询出差信息
     * 
     * @param queryTravelRequest
     * @return
     */
    @DeleteMapping(value = "/deleteTravel")
    public Object deleteTravel(QueryTravelRequest queryTravelRequest) {

	if (queryTravelRequest == null) {
	    logger.error("the request body is null");
	    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	}
	logger.info(String.format("the request body is %s:", queryTravelRequest.toString()));
	queryTravelRequest.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getUid());
	try {
	    epTravelMangerService.deleteTravel(queryTravelRequest);
	    return JSONResultUtil.setSuccess();
	}
	catch (Exception e) {
	    e.printStackTrace();
	}

	return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "delete leaveInfo fail");

    }

    /**
     * 文件下载
     * 
     * @param request/response/fileUrl
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

    private QueryTravelRequest makeRequestPragram(QueryTravelRequest queryTravelRequest) {
	if (queryTravelRequest.getPageNum() <= 0) {
	    queryTravelRequest.setPageNum(ConstantUtil.DEFAULT_PAGE_NUM);
	}
	if (queryTravelRequest.getPageSize() <= 0) {
	    queryTravelRequest.setPageSize(ConstantUtil.DEFAULT_PAGE_SIZE);
	}
	if (queryTravelRequest.getPageSize() > 100) {
	    queryTravelRequest.setPageSize(ConstantUtil.DEFAULT_MAX_PAGE_SIZE);
	}

	//从session 中获取登录信息
	SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
	queryTravelRequest.setUid(sysLoginCtrl.getUid());

	return queryTravelRequest;
    }

}
