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
import com.omcube.model.po.SysLoginCtrl;
import com.omcube.model.po.SysRoleBsnPO;
import com.omcube.model.po.SysRolePO;
import com.omcube.service.RoleService;
import com.omcube.util.SysLoginCtrlUtil;

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
	public List<SysRolePO> queryRoleList() {

		Map<String, String> param = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getuId();
		param.put("uid", uid);

		List<SysRolePO> roleInfos = sysRoleMapper.queryRoleList(param);

		return roleInfos;
	}

	/**
	 * @see com.omcube.service.RoleService#addRoleInfo(SysRolePO)
	 */
	@Override
	public void addRoleInfo(SysRolePO sysRolePO) throws Exception {

		// 判断输入参数的的合法性
		if (StringUtils.isBlank(sysRolePO.getRoleName()) || StringUtils.isBlank(sysRolePO.getRoleDescr())
				|| StringUtils.isBlank(sysRolePO.getStatus()) || sysRolePO.getRoleFuncSet().size() == 0) {
			logger.error("the roleName,roleDescr,status is null");
			throw new RuntimeException("输入角色信息非法!!");
		}

		// 添加角色时判断角色是否存在
		Map<String, String> param = new HashMap<String, String>();
		param.put("uid", sysRolePO.getuId());
		param.put("roleNo", sysRolePO.getRoleNo());

		if (sysRoleMapper.queryRoleByRoleNo(param) != null) {
			logger.error("the role is exist");
			throw new RuntimeException("此角色已经存在");
		}

		// 添加角色
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

		// 分配权限
		for (SysBsnPO func : sysRolePO.getRoleFuncSet()) {
			if (StringUtils.isBlank(func.getuId()) || StringUtils.isBlank(func.getBsnNo())) {
				logger.error("this SysBsnPO is null");
				throw new RuntimeException("没有给角色分配的业务功能!!!");
			}

			// 根据功能编号,和租户uid查询功能
			SysBsnPO exFunc = sysBsnMapper.queryFuncByBsnNo(func);

			if (exFunc == null) {
				logger.error("this SysBsnPO is null");
				throw new RuntimeException("功能编号不存在");
			}

			// 向角色和功能表中插入数据.
			SysRoleBsnPO sysRoleBsn = new SysRoleBsnPO();
			sysRoleBsn.setSysRole(sysRolePO);
			sysRoleBsn.setSysBsn(exFunc);
			sysRoleBsn.setStatus("1");
			sysRoleBsn.setCreatedBy("dj");
			sysRoleBsn.setCreatedDate(new Date());
			sysRoleBsn.setUpdatedBy("dj");
			sysRoleBsn.setUpdatedDate(new Date());

			// 关联角色和功能
			sysRoleBsnMapper.addRoleBsnInfo(sysRoleBsn);
		}
	}

	/**
	 * @see com.omcube.service.RoleService#queryRoleByRoleNo(String, String)
	 */
	@Override
	public SysRolePO queryRoleByRoleNo(String roleNo) {

		Map<String, String> param = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getuId();
		param.put("uid", uid);
		param.put("roleNo", roleNo);
		SysRolePO roleInfo = sysRoleMapper.queryRoleByRoleNo(param);

		return roleInfo;
	}

	/**
	 * @see com.omcube.service.RoleService#setRoleFunc(SysRolePO)
	 */
	@Override
	public void setRoleFunc(SysRolePO sysRolePO) throws Exception {

		// 查询对应的角色是否存在
		Map<String, String> param = new HashMap<String, String>();
		param.put("uid", sysRolePO.getuId());
		param.put("roleNo", sysRolePO.getRoleNo());
		SysRolePO exSysRolePO = sysRoleMapper.queryRoleByRoleNo(param);

		if (exSysRolePO == null) {
			logger.error("this role is not exist");
			throw new RuntimeException("此角色不存在");
		}

		for (SysBsnPO func : sysRolePO.getRoleFuncSet()) {
			if (StringUtils.isBlank(func.getuId()) || StringUtils.isBlank(func.getBsnNo())) {
				logger.error("this SysBsnPO is null");
				throw new RuntimeException("菜单的租户id,系统编号sysNo为空了");
			}

			// 根据功能编号,和租户uid查询功能
			SysBsnPO exFunc = sysBsnMapper.queryFuncByBsnNo(func);

			if (exFunc == null) {
				logger.error("this SysBsnPO is null");
				throw new RuntimeException("功能编号不存在");
			}

			// 向角色和功能表中插入数据.
			SysRoleBsnPO sysRoleBsn = new SysRoleBsnPO();
			sysRoleBsn.setSysRole(exSysRolePO);
			sysRoleBsn.setSysBsn(exFunc);
			sysRoleBsn.setStatus("1");
			sysRoleBsn.setCreatedBy("dj");
			sysRoleBsn.setCreatedDate(new Date());
			sysRoleBsn.setUpdatedBy("dj");
			sysRoleBsn.setUpdatedDate(new Date());

			// 关联角色和功能
			sysRoleBsnMapper.addRoleBsnInfo(sysRoleBsn);

		}

	}

	/**
	 * @see com.omcube.service.RoleService#modifyRoleInfo(SysRolePO)
	 */
	@Override
	public void modifyRoleInfo(SysRolePO sysRolePO) throws Exception {

		// 判断的角色的是否存在
		Map<String, String> params = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getuId();
		params.put("uid", uid);
		params.put("roleNo", sysRolePO.getRoleNo());

		SysRolePO newRole = sysRoleMapper.queryRoleByRoleNo(params);

		if (newRole == null) {

			logger.error("this role is not exist");
			throw new RuntimeException("修改的角色不存在");
		}

		sysRolePO.setuId(uid);
		sysRolePO.setUpdatedBy("dj");

		sysRoleMapper.modifyRoleInfo(sysRolePO);
	}

	/**
	 * @see com.omcube.service.RoleService#deleteRoleInfo(SysRolePO)
	 */
	@Override
	public void deleteRoleInfo(SysRolePO sysRolePO) {

		// 判断角色是否存在
		Map<String, String> param = new HashMap<String, String>();
		SysLoginCtrl sysLoginCtrl = SysLoginCtrlUtil.getSysLoginCtrlBySession();
		String uid = sysLoginCtrl.getuId();
		param.put("uid", uid);
		param.put("roleNo", sysRolePO.getRoleNo());
		SysRolePO newRole = sysRoleMapper.queryRoleByRoleNo(param);

		if (newRole == null) {

			logger.error("this role is null");
			throw new RuntimeException("角色不存在");
		}

		sysRoleMapper.deleteRoleInfo(sysRolePO);
	}

	/**
	 * @see com.omcube.service.RoleService#queryRoleDetail(SysRolePO)
	 */
	@Override
	public Object queryRoleDetail(SysRolePO sysRolePO) {

		return sysRoleMapper.queryRoleDetail(sysRolePO);
	}

}
