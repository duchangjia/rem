package com.omcube.web.controller;

import java.io.File;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
		
		queryTravelRequest.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getuId());
		TravelResponse travelInfo = epTravelMangerService.getTravelInfoByUserNo(queryTravelRequest);
		
		return JSONResultUtil.setSuccess(travelInfo);
    
	}
	
	
	
	/**
	 * 更新出差信息
	 * 
	 * @param epTravelPO
	 * @return
	 */
	@PutMapping(value = "/modifyTravelInfo")
	public Object modifyTravelInfo(EpTravelPO epTravelPO, MultipartFile file) {
	    
	    if (epTravelPO == null) {
		    logger.error("the request body is null");
		    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	    }
		logger.info(String.format("the request body is %s:", epTravelPO.toString()));
		
		epTravelPO.setuId(SysLoginCtrlUtil.getSysLoginCtrlBySession().getuId());
		
		try {
			if (!file.isEmpty()) {
				// 获的文件名
				String fileName = file.getOriginalFilename();
				// 将文件名保存到数据库
				epTravelPO.setAttachm(fileName);
				// 获的文件的后缀
				String fileSuffix = fileName.substring(fileName.lastIndexOf("."));
				// 文件上传的路劲
				String filePath = "e://attachm//";

				File newFile = new File(filePath + fileName);

				if (!newFile.getParentFile().exists()) {
					newFile.getParentFile().mkdirs();
				}

				file.transferTo(newFile);
			}

			//epTravelMangerService.modifyTravelInfo(epTravelPO);

			return JSONResultUtil.setSuccess();

		} catch (Exception e) {
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
	@GetMapping(value = "/deleteTravel")
	public Object deleteTravel(QueryTravelRequest queryTravelRequest) {
	    
	    if (queryTravelRequest == null) {
		    logger.error("the request body is null");
		    return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
	    }
		logger.info(String.format("the request body is %s:", queryTravelRequest.toString()));		
		queryTravelRequest.setUid(SysLoginCtrlUtil.getSysLoginCtrlBySession().getuId());
		epTravelMangerService.deleteTravel(queryTravelRequest);	
		return JSONResultUtil.setSuccess();
    
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
		queryTravelRequest.setUid(sysLoginCtrl.getuId());

		return queryTravelRequest;
	    }
	
	
    

}
