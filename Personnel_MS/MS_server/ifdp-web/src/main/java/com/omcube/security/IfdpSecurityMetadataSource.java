package com.omcube.security;

import com.omcube.model.mapper.SysActionsMapper;
import com.omcube.model.po.SysActionPO;
import com.omcube.util.SpringUtil;
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

    @Autowired
    private SysActionsMapper actionsMapper;

    @Override
    public Collection<ConfigAttribute> getAttributes(Object object) throws IllegalArgumentException {
        FilterInvocation fi = (FilterInvocation) object;
        if (actionsMapper == null) {
            actionsMapper = SpringUtil.getBean(SysActionsMapper.class);
        }
        for (SysActionPO action : actionsMapper.getAllActions()) {
            AntPathRequestMatcher matcher = new AntPathRequestMatcher(action.getActionURL());
            if (matcher.matches(fi.getHttpRequest())) {
                return action.getRoles().stream().map(r -> new SecurityConfig(r.getRoleId())).collect(Collectors.toList());
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
