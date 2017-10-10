package com.omcube.service;

import java.util.List;

import com.omcube.model.po.OrganTree;
import com.omcube.model.po.SysOrganPO;
import com.omcube.model.po.SysUserPO;

public interface OrganService {

    public List<OrganTree> queryOrganList(String organNo);

    public SysOrganPO queryCurrentOrgan(String organNo);

    public SysOrganPO queryCurrentAndParentOrganDetail(String organNo);

    public List<SysOrganPO> queryChildOrganDetail(String organNo);

    public List<SysUserPO> queryOrganMember(String organNo);

    public void deleteOrganInfo(String organNo);

    public void addOrganMember(SysUserPO sysUserPO);

    public void deleteOrganMember(String userNo);

    public void modifyOrganInfo(SysOrganPO sysOrganPO);

    public void addOrgan(SysOrganPO sysOrganPO);

    List<String> queryAllChildrenOrganNoes(String organNo);

}
