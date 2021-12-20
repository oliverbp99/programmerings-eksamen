package com.example.programmeringseksamen.models;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Data
@Entity
@Table(name = "kandidater")
public class Kandidat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private double age;

    @Column
    private String email;

    @ManyToOne
    @JoinColumn(name = "parti_navn", updatable = true)
    @Nullable
    private Parti parti;
}
