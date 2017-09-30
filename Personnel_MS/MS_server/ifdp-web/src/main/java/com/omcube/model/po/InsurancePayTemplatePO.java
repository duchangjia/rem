package com.omcube.model.po;

import java.io.Serializable;
import java.util.Date;


public class InsurancePayTemplatePO implements Serializable {
	private String uId;//UID
	private String applyNo;//申请号(模板编号)
	private String applyName;//模板名称
	private Double perEndmRate;//个人养老保险百分比
	private Double perEndmFixed;//个人养老保险固定额
	private Double comEndmRate;//公司养老保险百分比
	private Double comEndmFixed;//公司养老保险固定额
	private Double perMediRate;//个人医疗保险百分比
	private Double perMediFixed;//个人医疗保险固定额
	private Double comMediRate;//公司医疗保险百分比
	private Double comMediFixed;//公司医疗保险固定额
	private Double perUnemRate;//个人失业保险百分比
	private Double perUnemFixed;//个人失业保险固定额
	private Double comUnemRate;//公司失业保险百分比
	private Double comUnemFixed;//公司失业保险固定额
	private Double perEmplRate;//个人工伤保险百分比
	private Double perEmplFixed;//个人工伤保险固定额
	private Double comEmplRate;//公司工伤保险百分比
	private Double comEmplFixed;//公司工伤保险固定额
	private Double perMateRate;//个人生育保险百分比
	private Double perMateFixed;//个人生育保险固定额
	private Double comMateRate;//公司生育保险百分比
	private Double comMateFixed;//公司生育保险固定额
	private Double perHousRate;//个人住房公积金百分比
	private Double perHousFixed;//个人住房公积金固定额
	private Double comHousRate;//公司住房公积金百分比
	private Double comHousFixed;//公司住房公积金固定额
	private String remark ;//备注
	private String createdBy;//创建人
	private Date createdDate;//创建时间
	private String updatedBy;//更新人
	private Date updatedDate;//更新时间
	public InsurancePayTemplatePO(){}
	
	public String getuId() {
		return uId;
	}

	public void setuId(String uId) {
		this.uId = uId;
	}

	public String getApplyNo() {
		return applyNo;
	}
	public void setApplyNo(String applyNo) {
		this.applyNo = applyNo;
	}
	public String getApplyName() {
		return applyName;
	}
	public void setApplyName(String applyName) {
		this.applyName = applyName;
	}
	public Double getPerEndmRate() {
		return perEndmRate;
	}
	public void setPerEndmRate(Double perEndmRate) {
		this.perEndmRate = perEndmRate;
	}
	public Double getPerEndmFixed() {
		return perEndmFixed;
	}
	public void setPerEndmFixed(Double perEndmFixed) {
		this.perEndmFixed = perEndmFixed;
	}
	public Double getComEndmRate() {
		return comEndmRate;
	}
	public void setComEndmRate(Double comEndmRate) {
		this.comEndmRate = comEndmRate;
	}
	public Double getComEndmFixed() {
		return comEndmFixed;
	}
	public void setComEndmFixed(Double comEndmFixed) {
		this.comEndmFixed = comEndmFixed;
	}
	public Double getPerMediRate() {
		return perMediRate;
	}
	public void setPerMediRate(Double perMediRate) {
		this.perMediRate = perMediRate;
	}
	public Double getPerMediFixed() {
		return perMediFixed;
	}
	public void setPerMediFixed(Double perMediFixed) {
		this.perMediFixed = perMediFixed;
	}
	public Double getComMediRate() {
		return comMediRate;
	}
	public void setComMediRate(Double comMediRate) {
		this.comMediRate = comMediRate;
	}
	public Double getComMediFixed() {
		return comMediFixed;
	}
	public void setComMediFixed(Double comMediFixed) {
		this.comMediFixed = comMediFixed;
	}
	public Double getPerUnemRate() {
		return perUnemRate;
	}
	public void setPerUnemRate(Double perUnemRate) {
		this.perUnemRate = perUnemRate;
	}
	public Double getPerUnemFixed() {
		return perUnemFixed;
	}
	public void setPerUnemFixed(Double perUnemFixed) {
		this.perUnemFixed = perUnemFixed;
	}
	public Double getComUnemRate() {
		return comUnemRate;
	}
	public void setComUnemRate(Double comUnemRate) {
		this.comUnemRate = comUnemRate;
	}
	public Double getComUnemFixed() {
		return comUnemFixed;
	}
	public void setComUnemFixed(Double comUnemFixed) {
		this.comUnemFixed = comUnemFixed;
	}
	public Double getPerEmplRate() {
		return perEmplRate;
	}
	public void setPerEmplRate(Double perEmplRate) {
		this.perEmplRate = perEmplRate;
	}
	public Double getPerEmplFixed() {
		return perEmplFixed;
	}
	public void setPerEmplFixed(Double perEmplFixed) {
		this.perEmplFixed = perEmplFixed;
	}
	public Double getComEmplRate() {
		return comEmplRate;
	}
	public void setComEmplRate(Double comEmplRate) {
		this.comEmplRate = comEmplRate;
	}
	public Double getComEmplFixed() {
		return comEmplFixed;
	}
	public void setComEmplFixed(Double comEmplFixed) {
		this.comEmplFixed = comEmplFixed;
	}
	public Double getPerMateRate() {
		return perMateRate;
	}
	public void setPerMateRate(Double perMateRate) {
		this.perMateRate = perMateRate;
	}
	public Double getPerMateFixed() {
		return perMateFixed;
	}
	public void setPerMateFixed(Double perMateFixed) {
		this.perMateFixed = perMateFixed;
	}
	public Double getComMateRate() {
		return comMateRate;
	}
	public void setComMateRate(Double comMateRate) {
		this.comMateRate = comMateRate;
	}
	public Double getComMateFixed() {
		return comMateFixed;
	}
	public void setComMateFixed(Double comMateFixed) {
		this.comMateFixed = comMateFixed;
	}
	public Double getPerHousRate() {
		return perHousRate;
	}
	public void setPerHousRate(Double perHousRate) {
		this.perHousRate = perHousRate;
	}
	public Double getPerHousFixed() {
		return perHousFixed;
	}
	public void setPerHousFixed(Double perHousFixed) {
		this.perHousFixed = perHousFixed;
	}
	public Double getComHousRate() {
		return comHousRate;
	}
	public void setComHousRate(Double comHousRate) {
		this.comHousRate = comHousRate;
	}
	public Double getComHousFixed() {
		return comHousFixed;
	}
	public void setComHousFixed(Double comHousFixed) {
		this.comHousFixed = comHousFixed;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public Date getUpdatedDate() {
		return updatedDate;
	}
	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}
	
}
