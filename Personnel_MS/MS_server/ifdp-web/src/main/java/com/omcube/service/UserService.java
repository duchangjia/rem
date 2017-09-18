package com.omcube.service;

import com.omcube.model.dto.SysUser;
import com.omcube.model.mapper.SysUserMapper;
import com.omcube.model.po.SysUserPO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserService implements UserDetailsService {

    @Autowired
    private SysUserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SysUserPO userPO = userMapper.getUserByUsername(username);
        List<SimpleGrantedAuthority> authorities = userPO.getRoles().stream().map(r -> new SimpleGrantedAuthority(r.getRoleId())).collect(Collectors.toList());
        SysUser user = new SysUser(userPO.getUsername(), userPO.getPassword(), authorities);
        user.setEmail(userPO.getEmail());
        user.setMobileNo(userPO.getMobileNo());
        return user;
    }

}
