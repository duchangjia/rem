package com.omcube.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.omcube.model.mapper.SysBsnMapper;
import com.omcube.model.mapper.SysMenuFuncMapper;
import com.omcube.model.mapper.SysMenuMapper;
import com.omcube.model.mapper.SysRoleBsnMapper;
import com.omcube.model.mapper.SysRoleMapper;
import com.omcube.model.po.SysBsnPO;
import com.omcube.model.po.SysMenuFuncPO;
import com.omcube.model.po.SysMenuPO;
import com.omcube.model.po.SysRoleBsnPO;
import com.omcube.model.po.SysRolePO;
import com.omcube.service.RoleService;
import com.omcube.util.SpringUtil;

/**
 * 角色管理的service实现类
 * 
 * @author dangjun
 * @version 1.0
 */
@Service
@Transactional
public class RoleServiceImpl implements RoleService {

	private final Log logger = LogFactory.getLog(getClass());

	/** 角色的dao接口 */
	@Autowired
	private SysRoleMapper sysRoleMapper;

	/** 菜单的dao接口 */
	@Autowired
	private SysMenuMapper sysMenuMapper;

	/** 业务功能的dao接口 */
	@Autowired
	private SysBsnMapper sysBsnMapper;

	/** 菜单和业务功能的dao接口 */
	@Autowired
	private SysMenuFuncMapper sysMenuFuncMapper;

	/** 角色和业务功能的dao接口 */
	@Autowired
	private SysRoleBsnMapper sysRoleBsnMapper;

	/**
	 * @see com.omcube.service.RoleService#queryRoleList(String)
	 */
	@Override
	public List<SysRolePO> queryRoleList(String uId) {

		if (sysRoleMapper == null) {
			sysRoleMapper = SpringUtil.getBean(SysRoleMapper.class);
		}

		List<SysRolePO> roleInfos = sysRoleMapper.queryRoleList(uId);

		return roleInfos;
	}

	/**
	 * @see com.omcube.service.RoleService#addRoleInfo(SysRolePO)
	 */
	@Override
	public void addRoleInfo(SysRolePO sysRolePO) throws Exception {

		if (sysRoleMapper == null) {
			sysRoleMapper = SpringUtil.getBean(SysRoleMapper.class);
		}

		// 添加角色时判断角色是否存在
		Map<String, String> param = new HashMap<String, String>();
		param.put("uId", sysRolePO.getuId());
		param.put("roleNo", sysRolePO.getRoleNo());

		if (sysRoleMapper.queryRoleByRoleNo(param) != null) {
			logger.error("the role is exist");
			throw new RuntimeException("此角色已经存在");
		}

		sysRolePO.setuId(sysRolePO.getuId());
		sysRolePO.setRoleNo(sysRolePO.getRoleNo());
		sysRolePO.setRoleName(sysRolePO.getRoleName());
		sysRolePO.setStatus(sysRolePO.getStatus());
		sysRolePO.setRoleDescr(sysRolePO.getRoleDescr());
		sysRolePO.setCreatedBy("dj");
		sysRolePO.setCreatedDate(new Date());
		sysRolePO.setUpdatedBy("dj");
		sysRolePO.setUpdatedDate(new Date());

		sysRoleMapper.addRoleInfo(sysRolePO);
	}

	/**
	 * @see com.omcube.service.RoleService#queryRoleByRoleNo(String, String)
	 */
	@Override
	public SysRolePO queryRoleByRoleNo(String uId, String roleNo) {

		if (sysRoleMapper == null) {
			sysRoleMapper = SpringUtil.getBean(SysRoleMapper.class);
		}
		Map<String, String> param = new HashMap<String, String>();
		param.put("uId", uId);
		param.put("roleNo", roleNo);
		SysRolePO roleInfo = sysRoleMapper.queryRoleByRoleNo(param);

		return roleInfo;
	}

	/**
	 * @see com.omcube.service.RoleService#distributionRole(SysRolePO,SysMenuPO[])
	 */
	@Override
	public void distributionRole(SysRolePO sysRolePO, List<SysMenuPO> menus, List<SysBsnPO> bsns) throws Exception {

		// 查询对应的角色是否存在
		Map<String, String> param = new HashMap<String, String>();
		param.put("uId", sysRolePO.getuId());
		param.put("roleNo", sysRolePO.getRoleNo());
		sysRolePO = sysRoleMapper.queryRoleByRoleNo(param);

		if (sysRolePO == null) {
			logger.error("this role is not exist");
			throw new RuntimeException("此角色不存在");
		}

		for (SysMenuPO menu : menus) {
			if (StringUtils.isBlank(menu.getuId()) || StringUtils.isBlank(menu.getSysNo())
					|| StringUtils.isBlank(menu.getMenuNo())) {
				logger.error("this menu is null");
				throw new RuntimeException("菜单的租户id,系统编号sysNo,菜单编号menuNo为空了");
			}

			// 根据uId,系统编号sysNo,菜单编号menuNo查询菜单
			SysMenuPO newMenu = sysMenuMapper.queryMenuByUidAndSysNoAndMenuNo(menu);
			if (newMenu == null) {
				throw new RuntimeException("菜单不存在");
			}
			
			// 向功能表中插入数据
			SysBsnPO sysBsn = new SysBsnPO();
			sysBsn.setuId(newMenu.getuId());
			sysBsn.setBsnNo(String.valueOf(System.currentTimeMillis())); // 先暂定为当前毫秒值,以后根据具体规则生成
			sysBsn.setInterfaceName("testInterfacer");
			sysBsn.setMethodName("testMethed");
			sysBsn.setServiceName(newMenu.getMenuName());
			sysBsn.setStatus("1");
			sysBsn.setBsnUrl("http://addBsn");
			sysBsn.setRemark("insertBsn");
			sysBsn.setCreatedBy("dj");
			sysBsn.setCreatedDate(new Date());
			sysBsn.setUpdatedBy("dj");
			sysBsn.setUpdatedDate(new Date());

			sysBsnMapper.addBsn(sysBsn);

			// 添加角色功能中间表
			SysRoleBsnPO sysRoleBsn = new SysRoleBsnPO();
			sysRoleBsn.setSysRole(sysRolePO);
			sysRoleBsn.setSysBsn(sysBsn);
			sysRoleBsn.setStatus("1");
			sysRoleBsn.setCreatedBy("dj");
			sysRoleBsn.setCreatedDate(new Date());
			sysRoleBsn.setUpdatedBy("dj");
			sysRoleBsn.setUpdatedDate(new Date());

			sysRoleBsnMapper.addRoleBsn(sysRoleBsn);

			// 添加菜单功能的中间表
			SysMenuFuncPO sysMenuFunc = new SysMenuFuncPO();
			sysMenuFunc.setSysMenu(newMenu);
			sysMenuFunc.setSysBsn(sysBsn);
			sysMenuFunc.setStatus("1");
			sysMenuFunc.setCreatedBy("dj");
			sysMenuFunc.setCreatedDate(new Date());
			sysMenuFunc.setUpdatedBy("dj");
			sysMenuFunc.setUpdatedDate(new Date());
			sysMenuFunc.setRemark("addMenuBsn");

			sysMenuFuncMapper.addMenuFunc(sysMenuFunc);

		}

	}

	/**
	 * @see com.omcube.service.RoleService#updateRoleInfo(SysRolePO)
	 */
	@Override
	public void updateRoleInfo(SysRolePO sysRolePO) throws Exception {

		if (sysRoleMapper == null) {
			sysRoleMapper = SpringUtil.getBean(SysRoleMapper.class);
		}

		sysRoleMapper.updateRoleInfo(sysRolePO);
	}

	/**
	 * @see com.omcube.service.RoleService#queryRoleByRoleName(SysRolePO)
	 */
	@Override
	public Object queryRoleByRoleName(SysRolePO sysRolePO) {
		
		if (sysRoleMapper == null) {
			sysRoleMapper = SpringUtil.getBean(SysRoleMapper.class);
		}
		
		
		return null;
		
	}

}
