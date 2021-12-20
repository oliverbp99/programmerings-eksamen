package com.example.programmeringseksamen.repositories;

import com.example.programmeringseksamen.models.Kandidat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KandidatRepository extends JpaRepository<Kandidat, Long> {
}
