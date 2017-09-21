package com.omcube.security;

import com.omcube.model.mapper.SysBusinessMapper;
import com.omcube.model.po.SysBusinessPO;
import com.omcube.util.SpringUtil;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.stream.Collectors;

@Component
public class IfdpSecurityMetadataSource implements FilterInvocationSecurityMetadataSource {

	protected final Log logger = LogFactory.getLog(getClass());
	
    @Autowired
    private SysBusinessMapper actionsMapper;

    @Override
    public Collection<ConfigAttribute> getAttributes(Object object) throws IllegalArgumentException {
        FilterInvocation fi = (FilterInvocation) object;
        if (actionsMapper == null) {
            actionsMapper = SpringUtil.getBean(SysBusinessMapper.class);
        }
        for (SysBusinessPO action : actionsMapper.getAllBusiness()) {
            AntPathRequestMatcher matcher = new AntPathRequestMatcher(action.getBsnURL());
            if (matcher.matches(fi.getHttpRequest())) {
            	logger.info("the mached url is :" + action.getBsnURL());
                return action.getRoles().stream().map(r -> new SecurityConfig(r.getRoleNo())).collect(Collectors.toList());
            }
        }
        return null;
    }

    @Override
    public Collection<ConfigAttribute> getAllConfigAttributes() {
        return null;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return true;
    }
}
