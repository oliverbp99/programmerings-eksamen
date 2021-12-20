package com.example.programmeringseksamen.repositories;

import com.example.programmeringseksamen.models.Kandidat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface KandidatRepository extends JpaRepository<Kandidat, Long> {

    List<Kandidat> findKandidatsByParti_Name(String partiName);
}
