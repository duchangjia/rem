package com.omcube.controller;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.SysRolePO;
import com.omcube.service.RoleService;
import com.omcube.util.ErrorCodeConstantUtil;
import com.omcube.util.JSONResultUtil;
import com.omcube.util.SpringUtil;

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
	 * 像角色分配权限的方法
	 * 
	 * @param sysRolePO
	 * @param sysMenuPO
	 * @return
	 */
	@RequestMapping(value = "/distributionRole", method = RequestMethod.GET)
	public Object distributionRole(SysRolePO sysRolePO) {

		if (StringUtils.isEmpty(sysRolePO) || StringUtils.isEmpty(sysRolePO.getMenus())) {
			logger.error("the request params sysRolePO or sysMenuPO is null");
			return JSONResultUtil.setError("F00002", "the request params sysRolePO or sysMenuPO is null");
		}

		try {
			roleService.distributionRole(sysRolePO, sysRolePO.getMenus());
			return JSONResultUtil.setSuccess();
		} catch (Exception e) {

		}
		return JSONResultUtil.setError("F00002", "the request params is null");
	}

	/**
	 * 查询所有角色
	 * 
	 * @param uid
	 * @return Object
	 */
	@GetMapping(value = "/queryRoleList/{uId}")
	@Cacheable
	public Object queryRoleList(@PathVariable(value = "uId", required = true) String uId, Integer pageNum,
			Integer pageSize) {

		if (StringUtils.isEmpty(uId)) {
			logger.error("the request params uId is null");
			return JSONResultUtil.setError("F00002", "the request params uId is null");
		}

		if (roleService == null) {
			roleService = SpringUtil.getBean(RoleService.class);
		}

		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 2 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);

		List<SysRolePO> roleInfos = roleService.getRoleAll(uId);

		PageInfo<SysRolePO> pageInfo = new PageInfo<SysRolePO>(roleInfos);

		return JSONResultUtil.setSuccess(pageInfo);
	}

	/**
	 * 角色的添加
	 * 
	 * @param sysRolePO
	 * @return object
	 */
	@PostMapping(value = "/addRole")
	public Object addRoleInfo(SysRolePO sysRolePO) {

		if (sysRolePO == null) {
			logger.error("the request body is null");
			return JSONResultUtil.setError(ErrorCodeConstantUtil.REQUEST_INVALID_ERR, "the request body is null");
		}

		logger.info(String.format("the request body is %s:", sysRolePO.toString()));
		
		sysRolePO.setuId("0001");
		sysRolePO.setRoleNo("0003");
		String roleNo = String.valueOf(System.currentTimeMillis());
		sysRolePO.setRoleNo(roleNo);
		
		roleService.addRole(sysRolePO);

		return JSONResultUtil.setSuccess();

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
			return JSONResultUtil.setError("F00002", "the request params uId,roleNo is null");
		}

		if (roleService == null) {
			roleService = SpringUtil.getBean(RoleService.class);
		}

		return JSONResultUtil.setSuccess(roleService.getRoleByRoleNo(uId, roleNo));
	}

}
