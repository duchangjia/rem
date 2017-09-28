package com.omcube.security;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component("accessDecisionManager")
public class IfdpAccessDecisionManager implements AccessDecisionManager {

    protected final Log logger = LogFactory.getLog(getClass());

    @Override
    public void decide(Authentication authentication, Object object, Collection<ConfigAttribute> configAttributes) throws AccessDeniedException, InsufficientAuthenticationException {
        for (GrantedAuthority auth : authentication.getAuthorities()) {
            for (ConfigAttribute attr : configAttributes) {
                if(logger.isDebugEnabled()) {
                    logger.debug("matches " + auth.getAuthority() + " with: " + attr.getAttribute());
                }
                if (auth.getAuthority().contentEquals(attr.getAttribute())) return;
            }
        }
        throw new AccessDeniedException("当前访问没有权限");
    }

    @Override
    public boolean supports(ConfigAttribute attribute) {
        return true;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return true;
    }
}
