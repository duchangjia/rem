package com.omcube.parameter.verification;

import java.util.regex.Pattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.omcube.util.ConstantUtil;

public class ScaleValidator implements ConstraintValidator<Scale, Double> {

    @Override
    public void initialize(Scale money) {

    }

    @Override
    public boolean isValid(Double value, ConstraintValidatorContext context) {
	if (value == null) {
	    return false;
	}
	return Pattern.compile(ConstantUtil.MONEY_REG).matcher(value.toString()).matches() && 0 < value.doubleValue()
		&& value.doubleValue() <= 1;
    }

}
