package com.omcube.service;

import com.omcube.model.dto.SysUser;
import com.omcube.model.mapper.SysUserMapper;
import com.omcube.model.po.SysUserPO;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserService implements UserDetailsService {

	protected final Log logger = LogFactory.getLog(getClass());
    @Autowired
    private SysUserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SysUserPO userPO = new SysUserPO(); //userMapper.getUserByUsername(username);
        List<SimpleGrantedAuthority> authorities = userPO.getRoles().stream().map(r -> new SimpleGrantedAuthority(r.getRoleName())).collect(Collectors.toList());
        SysUser user = new SysUser(userPO.getUserName(), userPO.getPassword(), authorities);
        user.setEmail(userPO.getEmail());
        user.setMobileNo(userPO.getMobileTEL());
        return user;
    }

}
