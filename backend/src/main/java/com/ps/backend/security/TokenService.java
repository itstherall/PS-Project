package com.ps.backend.security;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import java.time.Instant;
import java.time.ZoneOffset;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


import com.ps.backend.model.Usuario;



@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secret;

    public String gerarToken(Usuario usuario) {
        return JWT.create()
            .withSubject(usuario.getEmail())
            .withExpiresAt(expiracao())
            .sign(Algorithm.HMAC256(secret));
    }

    public String validarToken(String token) {
        try {
            return JWT.require(Algorithm.HMAC256(secret))
                .build()
                .verify(token)
                .getSubject();
        } catch (Exception e) {
            return null;
        }
    }

    private Instant expiracao() {
        return LocalDateTime.now()
            .plusHours(2)
            .toInstant(ZoneOffset.of("-03:00"));
    }
}