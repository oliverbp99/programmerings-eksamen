package com.example.programmeringseksamen.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "partier")
public class Parti {
    @Id
    private String name;

    @Column
    private String description;

    @Column
    private String votes;

    @JsonIgnore
    @OneToMany(mappedBy = "parti", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private List<Kandidat> kandidater;
}
