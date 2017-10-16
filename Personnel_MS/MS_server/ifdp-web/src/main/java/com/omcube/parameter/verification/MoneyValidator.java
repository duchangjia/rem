package com.omcube.parameter.verification;

import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.omcube.util.ConstantUtil;

public class MoneyValidator implements ConstraintValidator<Money, Double> {

    private boolean allowZero;

    @Override
    public void initialize(Money money) {
	this.allowZero = money.allowZero();

    }

    @Override
    public boolean isValid(Double value, ConstraintValidatorContext context) {
	if (!allowZero) {
	    if (value == null || value.doubleValue() == 0) {
		return false;
	    }
	}
	if (value == null) {
	    return true;
	}
	return Pattern.compile(ConstantUtil.MONEY_REG).matcher(value.toString()).matches();
    }

}
