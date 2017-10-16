package com.omcube.parameter.verification;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import java.lang.annotation.ElementType;
import java.lang.annotation.RetentionPolicy;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ ElementType.FIELD, ElementType.METHOD })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = MoneyValidator.class)
public @interface Money {

    String message() default "金额精确到小数点后2位";

    boolean allowZero () default true;
    
    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
