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
import com.omcube.model.po.EPLeaveInfoPO;
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.service.EPLeaveMangerService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.GetNumUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.Result;
import com.omcube.util.SysLoginCtrlUtil;

/**
 * 请假详情管理controller
 * 
 * @author dangjun
 * @version 1.0
 */
@RestController
@RequestMapping(value = "leave")
public class EPLeaveMangerController {

	protected final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private EPLeaveMangerService epLeaveMangerService;

	/**
	 * 请假详情的添加
	 * 
	 * @param epLeaveInfoPO
	 * @return
	 */
	@PostMapping(value = "/addLeaveInfo")
	@CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
	public Object addLeaveInfo(@RequestBody EPLeaveInfoPO epLeaveInfoPO, MultipartFile file) {

		if (epLeaveInfoPO == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		// 请假编号的生成
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getUid();
		String applyNo = GetNumUtil.getNo();
		epLeaveInfoPO.setUid(uid);
		epLeaveInfoPO.setUid("0001");
		epLeaveInfoPO.setApplyNo(applyNo);

		try {
			if (!file.isEmpty()) {
				// 获的文件名
				String fileName = file.getOriginalFilename();
				// 获的文件的后缀
				// String fileSuffix =
				// fileName.substring(fileName.lastIndexOf("."));
				// 文件上传的路劲
				String filePath = "e://leave//";

				File newFile = new File(filePath + fileName);
				epLeaveInfoPO.setAttachm(fileName.toString());

				if (!newFile.getParentFile().exists()) {
					newFile.getParentFile().mkdirs();
				}

				file.transferTo(newFile);
			}

			epLeaveMangerService.addLeaveInfo(epLeaveInfoPO);

			return JSONResultUtil.setSuccess();

		} catch (Exception e) {
			e.printStackTrace();
		}

		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "add leaveInfo fail");
	}

	/**
	 * 请假的列表的查询
	 * 
	 * @param epLeaveInfoPO
	 * @return
	 */
	@GetMapping(value = "/queryLeaveList")
	public Object queryLeaveList(EPLeaveInfoPO epLeaveInfoPO, Integer pageNum, Integer pageSize) {

		// 分页信息的校验
		if (pageNum <= 0) {
			pageNum = ConstantUtil.DEFAULT_PAGE_NUM;
		}
		if (pageSize <= 0) {
			pageSize = ConstantUtil.DEFAULT_PAGE_SIZE;
		}
		if (pageSize > 100) {
			pageSize = ConstantUtil.DEFAULT_MAX_PAGE_SIZE;
		}

		// 入参的校验
		if (epLeaveInfoPO == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		// 返回的结果集
		Result<EPLeaveInfoPO> result = new Result<>();

		Page<EPLeaveInfoPO> page = PageHelper.startPage(pageNum, pageSize, true);

		List<EPLeaveInfoPO> leaveList = epLeaveMangerService.queryLeaveList(epLeaveInfoPO);

		long totalNum = page.getTotal();
		result.setTotal(totalNum);
		result.setModels(leaveList);

		return JSONResultUtil.setSuccess(result);

	}

	/**
	 * 请假的详情的查询
	 * 
	 * @param epLeaveInfoPO
	 * @return
	 */
	@GetMapping(value = "/queryLeaveInfos")
	public Object queryLeaveInfos(EPLeaveInfoPO epLeaveInfoPO, HttpServletResponse response) {

		if (epLeaveInfoPO == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		FileInputStream fis = null;
		BufferedInputStream bis = null;

		try {
			// 文件的下载
			EPLeaveInfoPO LeaveInfoPO = epLeaveMangerService.queryLeaveInfos(epLeaveInfoPO);
			String attachm = LeaveInfoPO.getAttachm();
			String fileName = attachm.substring(attachm.lastIndexOf("//"));

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

			// 查询
			return JSONResultUtil.setSuccess(LeaveInfoPO);

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

		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "query leaveInfo fail!!!");
	}

	/**
	 * 请假详情的删除
	 * 
	 * @param epLeaveInfoPO
	 * @return
	 */
	@DeleteMapping(value = "/deleteLeaveInfo")
	@CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
	public Object deleteLeaveInfo(EPLeaveInfoPO epLeaveInfoPO) {

		if (epLeaveInfoPO == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		try {
			epLeaveMangerService.deleteLeaveInfo(epLeaveInfoPO);
			return JSONResultUtil.setSuccess();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "delete leaveInfo fail");

	}

	/**
	 * 请假详情的修改
	 * 
	 * @param epLeaveInfoPO
	 * @return
	 */
	@PutMapping(value = "/modifyLeaveInfo")
	@CacheEvict(value = ConstantUtil.QUERY_CACHE, allEntries = true)
	public Object modifyLeaveInfo(EPLeaveInfoPO epLeaveInfoPO, MultipartFile file) {

		if (epLeaveInfoPO == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		try {
			if (!file.isEmpty()) {
				// 获的文件名
				String fileName = file.getOriginalFilename();
				// 将文件名保存到数据库
				epLeaveInfoPO.setAttachm(fileName);
				// 获的文件的后缀
				String fileSuffix = fileName.substring(fileName.lastIndexOf("."));
				// 文件上传的路劲
				String filePath = "e://attachm//";

				File newFile = new File(filePath + fileName);
				epLeaveInfoPO.setAttachm(fileName.toString());

				if (!newFile.getParentFile().exists()) {
					newFile.getParentFile().mkdirs();
				}

				file.transferTo(newFile);
			}

			epLeaveMangerService.modifyLeaveInfo(epLeaveInfoPO);

			return JSONResultUtil.setSuccess();

		} catch (Exception e) {
			e.printStackTrace();
		}

		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "update leaveInfo fail");
	}
}
