package com.omcube.parameter.verification;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import java.lang.annotation.ElementType;
import java.lang.annotation.RetentionPolicy;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ ElementType.FIELD, ElementType.METHOD })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ScaleValidator.class)
public @interface Scale {

    String message() default "比例精确到小数点后2位，且大于0，小于等于1";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
