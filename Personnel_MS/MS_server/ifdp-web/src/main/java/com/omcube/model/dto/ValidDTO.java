package com.omcube.model.dto;

import java.math.BigDecimal;

import javax.validation.constraints.NotNull;

public class ValidDTO {
	
	@NotNull(message = "金额必传")
    private BigDecimal money;

	public BigDecimal getMoney() {
		return money;
	}

	public void setMoney(BigDecimal money) {
		this.money = money;
	}
	
}
