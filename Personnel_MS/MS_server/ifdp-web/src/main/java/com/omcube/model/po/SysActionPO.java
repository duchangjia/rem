package com.omcube.model.po;

import java.util.List;

public class SysActionPO extends BasicPO {
    private String actionId;
    private String actionName;
    private String actionURL;
    private String method;
    private List<SysRolePO> roles;

    public String getActionId() {
        return actionId;
    }

    public void setActionId(String actionId) {
        this.actionId = actionId;
    }

    public String getActionName() {
        return actionName;
    }

    public void setActionName(String actionName) {
        this.actionName = actionName;
    }

    public String getActionURL() {
        return actionURL;
    }

    public void setActionURL(String actionURL) {
        this.actionURL = actionURL;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public List<SysRolePO> getRoles() {
        return roles;
    }

    public void setRoles(List<SysRolePO> roles) {
        this.roles = roles;
    }
}
