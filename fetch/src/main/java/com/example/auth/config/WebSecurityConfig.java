package com.example.auth.config;

import com.example.auth.jwt.JwtTokenFilter;
import com.example.auth.jwt.JwtTokenUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;

@Configuration
public class WebSecurityConfig {
    private final JwtTokenUtils tokenUtils;
    private final UserDetailsService userService;
    public WebSecurityConfig(
            JwtTokenUtils tokenUtils,
            UserDetailsService userService
    ) {
        this.tokenUtils = tokenUtils;
        this.userService = userService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http
    ) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/error", "/token/issue", "/views/**")
                            .permitAll();
                    auth.requestMatchers("/articles/**")
                            .permitAll();
                    auth.anyRequest()
                            .authenticated();
                })
                .addFilterBefore(
                        new JwtTokenFilter(
                                tokenUtils,
                                userService
                        ),
                        AuthorizationFilter.class
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        return http.build();
    }
}
