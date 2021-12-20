package com.example.programmeringseksamen.controllers;

import com.example.programmeringseksamen.DTO.KandidatDTO;
import com.example.programmeringseksamen.models.Kandidat;
import com.example.programmeringseksamen.repositories.KandidatRepository;
import com.example.programmeringseksamen.repositories.PartiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class KandidatController {
    @Autowired
    KandidatRepository kandidater;

    @Autowired
    PartiRepository partier;

    @GetMapping("/kandidater")
    public List<Kandidat> getKandidater(){
        return kandidater.findAll();
    }

    @GetMapping("/kandidater/{id}")
    public Kandidat getKandidatById(@PathVariable Long id){
        return kandidater.findById(id).get();
    }

    @PostMapping("/kandidater/{name}")
    public KandidatDTO createKandidat(@PathVariable String name, @RequestBody Kandidat kandidatToCreate){
        return partier.findById(name).map(parti -> {
            kandidatToCreate.setId(null);
            kandidatToCreate.setParti(parti);
            Kandidat createdKandidat = kandidater.save(kandidatToCreate);
            return new KandidatDTO(createdKandidat, kandidatToCreate.getParti().getName());
        }).orElse(new KandidatDTO("Did not find parti by name"));
    }

    @PatchMapping("/kandidater/{id}")
    public KandidatDTO patchKandidatById(@PathVariable Long id, @RequestBody Kandidat kandidatToUpdate) {
        return kandidater.findById(id).map(foundKandidat -> {
            if (kandidatToUpdate.getName() != null) foundKandidat.setName(kandidatToUpdate.getName());
            if (kandidatToUpdate.getAge() != 0) foundKandidat.setAge(kandidatToUpdate.getAge());
            if (kandidatToUpdate.getEmail() != null) foundKandidat.setEmail(kandidatToUpdate.getEmail());

            if (kandidatToUpdate.getParti() != null && kandidatToUpdate.getParti().getName() != null) foundKandidat.setParti(kandidatToUpdate.getParti());

            Kandidat updatedKandidat = kandidater.save(foundKandidat);
            return new KandidatDTO(updatedKandidat, kandidatToUpdate.getParti().getName());
        }).orElse(new KandidatDTO("Kandidat ikke fundet"));
    }

    @DeleteMapping("/kandidater/{id}")
    public void deleteKandidatById(@PathVariable Long id){
        kandidater.deleteById(id);
    }
}
