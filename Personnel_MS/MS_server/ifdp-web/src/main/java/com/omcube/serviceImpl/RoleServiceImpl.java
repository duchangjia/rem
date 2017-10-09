package com.omcube.serviceImpl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
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
	 * @see com.omcube.service.RoleService#getRoleAll(String)
	 */
	@Override
	public List<SysRolePO> getRoleAll(String uId) {

		if (sysRoleMapper == null) {
			sysRoleMapper = SpringUtil.getBean(SysRoleMapper.class);
		}

		List<SysRolePO> roleInfos = sysRoleMapper.getRoleAll(uId);

		return roleInfos;
	}

	/**
	 * @see com.omcube.service.RoleService#addRole(SysRolePO)
	 */
	@Override
	public void addRole(SysRolePO sysRolePO) {

		if (sysRoleMapper == null) {
			sysRoleMapper = SpringUtil.getBean(SysRoleMapper.class);
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
		
		sysRoleMapper.addRole(sysRolePO);
	}

	/**
	 * @see com.omcube.service.RoleService#getRoleByRoleNo(String, String)
	 */
	@Override
	public SysRolePO getRoleByRoleNo(String uId, String roleNo) {

		if (sysRoleMapper == null) {
			sysRoleMapper = SpringUtil.getBean(SysRoleMapper.class);
		}
		Map parem = new HashMap();
		parem.put("uId", uId);
		parem.put("roleNo", roleNo);
		SysRolePO roleInfo = sysRoleMapper.getRoleByRoleNo(parem);

		return roleInfo;
	}

	/**
	 * @see com.omcube.service.RoleService#distributionRole(SysRolePO,SysMenuPO[])
	 */
	@Override
	public void distributionRole(SysRolePO sysRolePO, List<SysMenuPO> menus) throws Exception {

		// 查询对应的角色是否存在
		Map param = new HashMap();
		param.put("uId", sysRolePO.getuId());
		param.put("roleNo", sysRolePO.getRoleNo());
		sysRolePO = sysRoleMapper.getRoleByRoleNo(param);
		if (sysRolePO == null) {
			logger.error("this role is not exist");
			throw new RuntimeException("此角色不存在");
		}

		for (SysMenuPO menu : menus) {
			if (StringUtils.isBlank(menu.getuId()) || StringUtils.isBlank(menu.getSysNo())
					|| StringUtils.isBlank(menu.getMenuNo())) {
				logger.error("this menu is null");
				throw new RuntimeException("菜单的Uid或者系统编号,菜单编号为空了.");
			}
			// 根据uid,系统编号,菜单编号查询这个菜单
			SysMenuPO newMenu = sysMenuMapper.findMenuByUidAndSysNoAndMenuNo(menu);
			if (newMenu == null) {
				throw new RuntimeException("菜单编号错误");
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

			// 添加角色功能表
			SysRoleBsnPO sysRoleBsn = new SysRoleBsnPO();
			sysRoleBsn.setSysRolePO(sysRolePO);
			sysRoleBsn.setSysBsn(sysBsn);
			sysRoleBsn.setStatus("1");
			sysRoleBsn.setCreatedBy("dj");
			sysRoleBsn.setCreatedDate(new Date());
			sysRoleBsn.setUpdatedBy("dj");
			sysRoleBsn.setUpdatedDate(new Date());

			sysRoleBsnMapper.addRoleBsn(sysRoleBsn);

			// 添加菜单功能的中间表
			SysMenuFuncPO sysMenuFunc = new SysMenuFuncPO();
			sysMenuFunc.setSysMenuPO(newMenu);
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

}
