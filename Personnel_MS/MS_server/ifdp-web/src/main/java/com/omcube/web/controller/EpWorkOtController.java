package com.omcube.web.controller;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.omcube.model.po.EPWorkOtPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.request.QueryWorkOt;
import com.omcube.model.response.WorkOtResponse;
import com.omcube.service.EPWorkOtService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.GetNumUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.Result;
import com.omcube.util.SysLoginCtrlUtil;

/**
 * 加班管理的controller
 * 
 * @author dangjun
 * @version 1.0
 */
@RestController
@RequestMapping(value = "workot")
public class EpWorkOtController {

	protected final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private EPWorkOtService epWorkOtService;

	/**
	 * 加班详情的添加
	 * 
	 * @param epWorkOtPO
	 * @return
	 */
	@PostMapping(value = "/addWorkOtInfo")
	@CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
	public Object addWorkOtInfo(@RequestBody WorkOtResponse workOtResponse) {

		if (workOtResponse == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		// 生成加班的编号
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		String applyNo = GetNumUtil.getNo();
		workOtResponse.setUid(uid);
		workOtResponse.setApplyNo(applyNo);

		// 文件的上传
		MultipartFile file = workOtResponse.getFile();
		try {
			if (!file.isEmpty()) {
				// 获的文件名
				String fileName = file.getOriginalFilename();
				// 获的文件的后缀
				String fileSuffix = fileName.substring(fileName.lastIndexOf("."));
				// 文件上传的路劲
				String filePath = "e://workot//";
				File newFile = new File(filePath + fileName);
				// 将文件名保存到数据库
				workOtResponse.setAttachm(newFile.toString());

				if (!newFile.getParentFile().exists()) {
					newFile.getParentFile().mkdirs();
				}

				file.transferTo(newFile);
			}

			epWorkOtService.addWorkOtInfo(workOtResponse);
			return JSONResultUtil.setSuccess();

		} catch (Exception e) {
			e.printStackTrace();
		}

		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "add workotInfo fail");
	}

	/**
	 * 加班详情的修改
	 * 
	 * @param epWorkOtPO
	 * @return
	 */
	@PutMapping(value = "/modifyWorkOtInfo")
	@CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
	public Object modifyWorkOtInfo(WorkOtResponse workOtResponse) {

		if (workOtResponse == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		// 文件的上传
		MultipartFile file = workOtResponse.getFile();
		try {
			if (!file.isEmpty()) {
				// 获的文件名
				String fileName = file.getOriginalFilename();
				// 获的文件的后缀
				String fileSuffix = fileName.substring(fileName.lastIndexOf("."));
				// 文件上传的路劲
				String filePath = "e://attachm//";

				File newFile = new File(filePath + fileName);
				// 将文件名保存到数据库
				workOtResponse.setAttachm(newFile.toString());

				if (!newFile.getParentFile().exists()) {
					newFile.getParentFile().mkdirs();
				}

				file.transferTo(newFile);
			}

			epWorkOtService.modifyWorkOtInfo(workOtResponse);

			return JSONResultUtil.setSuccess();

		} catch (Exception e) {
			e.printStackTrace();
		}

		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "update workotInfo fail");

	}

	/**
	 * 加班详情的删除
	 * 
	 * @param epWorkOtPO
	 * @return
	 */
	@DeleteMapping(value = "/deleteWorkOtInfo")
	@CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
	public Object deleteWorkOtInfo(QueryWorkOt queryWorkOt) {

		if (queryWorkOt == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		try {
			epWorkOtService.deleteWorkOtInfo(queryWorkOt);
			return JSONResultUtil.setSuccess();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "delete workotInfo fail");

	}

	/**
	 * 加班的详情的查询
	 * 
	 * @param epWorkOtPO
	 * @param response
	 * @return
	 */
	@GetMapping(value = "/queryWorkOtInfos")
	public Object queryWorkOtInfos(QueryWorkOt queryWorkOt, HttpServletResponse response) {

		if (queryWorkOt == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		FileInputStream fis = null;
		BufferedInputStream bis = null;

		try {
			// 查询加班的详情
			EPWorkOtPO epWorkInfos = epWorkOtService.queryWorkOtInfos(queryWorkOt);
			String attachm = epWorkInfos.getAttachm();
			String fileName = attachm.substring(attachm.lastIndexOf("//"));

			// 文件的下载
			if (fileName != null) {
				String filePath = "e://attachm//";
				File file = new File(filePath, fileName);

				if (file.exists()) {
					// 设置下载不打开文件
					response.setContentType("application/force-download");
					// 设置文件名
					response.addHeader("Content-Disposition", "attachment;fileName=" + fileName);

					byte[] buffer = new byte[1024];
					fis = new FileInputStream(file);
					bis = new BufferedInputStream(fis);
					OutputStream ops = response.getOutputStream();

					// 读写文件
					int len = bis.read(buffer);
					while (len != -1) {
						ops.write(buffer, 0, len);
						len = bis.read(buffer);
					}
				}
			}

			return JSONResultUtil.setSuccess(epWorkInfos);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (bis != null) {
				try {
					bis.close();
				} catch (Exception e) {
					e.printStackTrace();
				}

				if (fis != null) {
					try {
						fis.close();
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
			}

		}

		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "query workOtInfo fail!!!");
	}

	/**
	 * 加班详情列表的查询
	 * 
	 * @param epWorkOtPO
	 * @return
	 */
	@GetMapping(value = "/queryWorkOtList")
	public Object queryWorkOtList(QueryWorkOt queryWorkOt) {

		// 入参的校验
		if (queryWorkOt == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		// 分页信息的校验
		Integer pageNum = queryWorkOt.getPageNum();
		Integer pageSize = queryWorkOt.getPageSize();

		if (pageNum <= 0) {
			pageNum = ConstantUtil.DEFAULT_PAGE_NUM;
		}
		if (pageSize <= 0) {
			pageSize = ConstantUtil.DEFAULT_PAGE_SIZE;
		}
		if (pageSize > 100) {
			pageSize = ConstantUtil.DEFAULT_MAX_PAGE_SIZE;
		}

		// 返回的结果集
		Result<WorkOtResponse> result = new Result<>();

		Page<WorkOtResponse> page = PageHelper.startPage(pageNum, pageSize, true);

		List<WorkOtResponse> oworkOtList = epWorkOtService.queryWorkOtList(queryWorkOt);

		long totalNum = page.getTotal();
		result.setTotal(totalNum);
		result.setModels(oworkOtList);

		return JSONResultUtil.setSuccess(result);

	}

}
