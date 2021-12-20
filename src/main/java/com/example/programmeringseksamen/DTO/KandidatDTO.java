package com.example.programmeringseksamen.DTO;

import com.example.programmeringseksamen.models.Kandidat;

public class KandidatDTO {
    public Kandidat kandidat;
    public String name;
    public boolean failed;
    public String errorMessage;

    public KandidatDTO(Kandidat kandidat, String name) {
        this.kandidat = kandidat;
        this.name = name;
    }

    public KandidatDTO(String errorMessage) {
        this.errorMessage = errorMessage;
        this.failed = true;
    }
}
