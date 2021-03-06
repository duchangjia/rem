package com.omcube.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.omcube.model.po.PactChange;
import com.omcube.model.po.PactPO;
import com.omcube.model.po.PactRenew;
import com.omcube.service.PactService;
import com.omcube.service.RoleService;
import com.omcube.util.JSONResultUtil;


/**
 * 合同
 **/
@RestController
@RequestMapping(value = "/pact")
public class PactController {
	
	//合同service
	@Autowired
	private PactService pactService;
	
	//角色service
	@Autowired
	private RoleService roleService;
	
	/**
	 * 第一次页面显示
	 * @param request
	 * @param pageNum
	 * @param pageSize
	 * @param derpNo
	 * @param custName
	 * @param pactType
	 * @return
	 */
	@GetMapping(value = "/queryPactList")
	public Object queryPactList( Integer pageNum, Integer pageSize ,
			String derpNo, String custName, String pactType){
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 10 : pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<PactPO> pactListArray = pactService.getPactList(derpNo, custName, pactType);
		PageInfo<PactPO> pageInfo = new PageInfo<PactPO>(pactListArray);
		return JSONResultUtil.setSuccess(pageInfo);
	}
	
	/**
	 * 合同详细查询
	 * @param pactNo
	 * @return
	 */
	@GetMapping(value = "/queryPactDetail")
	public Object queryPactDetail(@RequestParam String pactNo){
		return JSONResultUtil.setSuccess(pactService.getPactByPactNo(pactNo));
	}
	
	/**
	 * 合同变更情况
	 * @param request
	 * @param pageNum
	 * @param pageSize
	 * @param pactNo
	 * @return
	 */
	@GetMapping(value = "/queryPactChangeList")
	public Object queryPactChangeList(HttpServletRequest request, Integer pageNum, Integer pageSize,@RequestParam String pactNo){
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 10 :pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<PactChange> pChangeListArray = pactService.getPactChangeList(pactNo);
		PageInfo<PactChange> pageInfo = new PageInfo<PactChange>(pChangeListArray);
		return JSONResultUtil.setSuccess(pageInfo);
	}
	
	/**
	 * 合同变更详情查询
	 * @param pactNo
	 * @param changeId
	 * @return
	 */
	@GetMapping(value = "/queryPactChangeDetail")
	public Object queryPactChangeDetail(@RequestParam String pactNo, @RequestParam String changeId){
		return JSONResultUtil.setSuccess(pactService.getPactChangeDetail(pactNo, changeId));
	}
	
	/**
	 * 合同续签情况查询
	 * @param request
	 * @param pageNum
	 * @param pageSize
	 * @param pactNo
	 * @return
	 */
	@GetMapping(value = "/queryPactRenewList")
	public Object queryPactRenewList(HttpServletRequest request, Integer pageNum, Integer pageSize, @RequestParam String pactNo){
		pageNum = pageNum == null ? 1 : pageNum;
		pageSize = pageSize == null ? 10 :pageSize;
		PageHelper.startPage(pageNum, pageSize, true);
		List<PactRenew> pRenewListArray = pactService.getPactRenewList(pactNo);
		PageInfo<PactRenew> pageInfo = new PageInfo<PactRenew>(pRenewListArray);
		return JSONResultUtil.setSuccess(pageInfo);
	}
	
	/**
	 * 合同续签详情查询
	 * @param pactNo
	 * @param renewId
	 * @return
	 */
	@GetMapping(value = "/queryPactRenewDetail")
	public Object queryPactRenewDetail(@RequestParam String pactNo, @RequestParam String renewId){
		return JSONResultUtil.setSuccess(pactService.getPactRenewDetail(pactNo, renewId));
	}
	
	/**
	 * 合同添加时查询工号是否重复,uId需要后台给出
	 * @param roleNo
	 * @return
	 */
	@GetMapping(value = "/queryUserByRoleNo")
	public Object queryUserByRoleNo(@RequestParam String roleNo){
		return JSONResultUtil.setSuccess(roleService.queryRoleByRoleNo(roleNo));
	}
	
	/**
	 * 合同添加    isdelete前台传入
	 * @param pactPO
	 */
	@PostMapping(value = "/addPact")
	public void addPact(@RequestParam PactPO pactPO){
		pactService.addPact(pactPO);
	}
	
	/**
	 * 合同变更信息添加
	 * @param pactChange
	 */
	@PostMapping(value = "/addPactChange")
	public void addPactChange(@RequestParam PactChange pactChange){
		pactService.addPactChange(pactChange);
	}
	
	/**
	 * 续签合同信息添加
	 * @param pactRenew
	 */
	@PostMapping(value = "/addPactRenew")
	public void addPactRenew(@RequestParam PactRenew pactRenew){
		pactService.addPactRenew(pactRenew);
	}
	
	/**
	 * 删除合同...isdelete由后台给出
	 * @param pactNo
	 */
	@PutMapping(value = "/deletePact")
	public void deletePact(@RequestParam String pactNo){
		pactService.deletePact(pactNo);
	}
	
	/**
	 * 删除合同变更信息
	 * @param pactNo
	 * @param changeId
	 */
	@PutMapping(value = "/deletePactChange")
	public void deletePactChange(@RequestParam String pactNo, @RequestParam String changeId){
		pactService.deletePactChange(pactNo, changeId);
	}
	
	/**
	 * 删除合同续约信息
	 * @param pactNo
	 * @param renewId
	 */
	@PutMapping(value = "/deletePactRenew")
	public void deletePactRenew(@RequestParam String pactNo, @RequestParam String renewId){
		pactService.deletePactRenew(pactNo, renewId);
	}
	
	/**
	 * 修改合同信息
	 * @param pactPO
	 */
	@PutMapping(value = "/updatePact")
	public void updatePact(@RequestParam PactPO pactPO){
		pactService.updatePact(pactPO);
	}
	
	/**
	 * 修改合同更改信息
	 * @param pactChange
	 */
	public void updatePactChange(@RequestParam PactChange pactChange){
		pactService.updatePactChange(pactChange);
	}
	
	/**
	 * 修改合同续约信息
	 * @param pactRenew
	 */
	public void updatePactRenew(@RequestParam PactRenew pactRenew){
		pactService.updatePactRenew(pactRenew);
	}
	
}
