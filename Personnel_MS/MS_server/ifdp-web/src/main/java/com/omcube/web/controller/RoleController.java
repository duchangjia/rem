package com.omcube.web.controller;

import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.omcube.model.po.SysRolePO;
import com.omcube.service.RoleService;
import com.omcube.util.ConstantUtil;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.Result;

/**
 * 角色管理的controller
 * 
 * @author dangjun
 * @version 1.0
 */
@RestController
@RequestMapping(value = "iem/role")
@CacheConfig(cacheNames = "roles")
public class RoleController {

	protected final Log logger = LogFactory.getLog(getClass());

	@Autowired
	private RoleService roleService;

	/**
	 * 查询所有角色
	 * 
	 * @param uid
	 * @return Object
	 */
	@GetMapping(value = "/queryRoleList")
	@Cacheable
	public Object queryRoleList(@RequestParam(value = "uId", required = true) String uId, Integer pageNum,
			Integer pageSize) {

		// 租户id的非空校验
		if (StringUtils.isEmpty(uId)) {
			logger.error("the request params uId is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request params uId is null");
		}

		// 分页信息的校验
		if (pageNum <= 0) {
			pageNum = ConstantUtil.DEFAULT_PAGE_NUM;
		}
		if (pageSize <= 0) {
			pageSize = ConstantUtil.DEFAULT_PAGE_SEZE;
		}
		if (pageSize > 100) {
			pageSize = ConstantUtil.DEFAULT_MAX_PAGE_SEZE;
		}

		// 返回结果集
		Result<SysRolePO> result = new Result<>();

		Page<SysRolePO> page = PageHelper.startPage(pageNum, pageSize, true);

		List<SysRolePO> roleInfos = roleService.queryRoleList(uId);

		long totalNum = page.getTotal();
		result.setTotal(totalNum);
		result.setModel(roleInfos);

		return JSONResultUtil.setSuccess(result);
	}

	/**
	 * 角色的添加
	 * 
	 * @param sysRolePO
	 * @return object
	 */
	@PostMapping(value = "/addRoleInfo")
	public Object addRoleInfo(SysRolePO sysRolePO) {

		if (sysRolePO == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		logger.info(String.format("the request body is %s:", sysRolePO.toString()));

		String roleNo = String.valueOf(System.currentTimeMillis()); // 角色的编号暂时使用当前的毫秒值代替
		sysRolePO.setuId("0001");
		sysRolePO.setRoleNo(roleNo);

		try {
			roleService.addRoleInfo(sysRolePO);
			return JSONResultUtil.setSuccess();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "add role fail");

	}

	/**
	 * 角色修改时候的数据回显
	 * 
	 * @param uId
	 * @param roleNo
	 * @return Object
	 */
	@GetMapping(value = "/queryRoleByRoleNo/{uId}/{roleNo}")
	@Cacheable
	public Object queryRoleByRoleNo(@PathVariable(value = "uId", required = true) String uId,
			@PathVariable(value = "roleNo", required = true) String roleNo) {

		if (StringUtils.isEmpty(uId) || StringUtils.isEmpty(roleNo)) {
			logger.error("the request params uId ,roleNo is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request params uId,roleNo is null");
		}

		return JSONResultUtil.setSuccess(roleService.queryRoleByRoleNo(uId, roleNo));
	}

	/**
	 * 角色的修改
	 * 
	 * @param sysRolePO
	 * @return
	 */
	@PutMapping(value = "/updateRoleInfo")
	public Object updateRoleInfo(SysRolePO sysRolePO) {

		if (sysRolePO == null) {
			logger.error("the request params sysRolePO is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request params sysRolePO is null");
		}

		try {
			roleService.updateRoleInfo(sysRolePO);
			return JSONResultUtil.setSuccess();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "update role fail");
	}
	
	/**
	 * 权限分配页面角色的查询
	 * 
	 * @return
	 */
	@GetMapping(value="/queryRoleByRoleNameOrRoleNo")
	public Object queryRoleByRoleName(SysRolePO sysRolePO){
		if (sysRolePO == null) {
			logger.error("the request params sysRolePO is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request params sysRolePO is null");
		}
		
		JSONResultUtil.setSuccess(roleService.queryRoleByRoleName(sysRolePO));
		
		return null;
	}

	/**
	 * 向角色分配权限的方法
	 * 
	 * @param sysRolePO
	 * @param sysMenuPO
	 * @return
	 */
	@PostMapping(value = "/distributionRole")
	public Object distributionRole(SysRolePO sysRolePO) {

		if (sysRolePO == null || StringUtils.isEmpty(sysRolePO.getMenus())) {
			logger.error("the request params sysRolePO or menus is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR,
					"the request params sysRolePO or menus is null");
		}

		try {
			roleService.distributionRole(sysRolePO, sysRolePO.getMenus(), sysRolePO.getBsns());
			return JSONResultUtil.setSuccess();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request params is null");
	}
}
