package com.ps.backend.controller.pages;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CarrinhoRoteController {
    @GetMapping("/carrinho")
    public String carrinho() {
        return "carrinho";
    }
}