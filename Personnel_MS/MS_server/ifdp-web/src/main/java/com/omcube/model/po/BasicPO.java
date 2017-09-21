package com.omcube.model.po;

import java.util.Date;

public class BasicPO {
    private String status;
    private Date createdDate;
    private Date updatedDate;
    private String createdBy;
    private String updatedBy;
    private String uId;//租户id
    
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}

	public String getuId() {
		return uId;
	}

	public void setuId(String uId) {
		this.uId = uId;
	}

}
