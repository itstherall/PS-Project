package com.ps.backend.security;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.ps.backend.model.Usuario;
import com.ps.backend.repository.UsuarioRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UsuarioRepository repository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
        HttpServletResponse response, 
        FilterChain filterChain) 
        throws ServletException, IOException {

        String token = recuperarToken(request);

        
        if (token != null) {
            
            String email = tokenService.validarToken(token);

            if (email != null) {
                Usuario usuario = repository.findByEmail(email).get();

                var authentication = new UsernamePasswordAuthenticationToken(
                    usuario,
                    null,
                    List.of(new SimpleGrantedAuthority("ROLE_USER"))  //deixar assim por enquanto até eu ajeitar a parte de roles, ai eu coloco usuario.getAuthorities() aqui, e no Usuario.java eu implemento o getAuthorities() para retornar as roles do usuario, ai eu posso usar o @PreAuthorize("hasRole('ADMIN')") nas rotas de admin, e deixar as rotas de listagem e busca sem proteção, para que os usuarios comuns possam acessar

                    //usuario.getAuthorities()
                );

                //SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }

        filterChain.doFilter(request, response);
    }

    private String recuperarToken(HttpServletRequest request) {

        var cabecalhoAuth = request.getHeader("Authorization");

        if (cabecalhoAuth == null){
            return null;
        }

        return cabecalhoAuth.replace("Bearer ", "");
    }
}