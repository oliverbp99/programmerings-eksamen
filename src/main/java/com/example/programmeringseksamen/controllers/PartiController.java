package com.example.programmeringseksamen.controllers;

import com.example.programmeringseksamen.models.Parti;
import com.example.programmeringseksamen.repositories.PartiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PartiController {
    @Autowired
    PartiRepository partier;

    @GetMapping("/partier")
    public List<Parti> getPartier(){
        return partier.findAll();
    }
}
