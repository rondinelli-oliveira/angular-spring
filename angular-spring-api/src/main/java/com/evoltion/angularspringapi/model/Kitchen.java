package com.evoltion.angularspringapi.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Kitchen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 20, nullable = false)
    private String category;

    @Column(length = 200, nullable = false)
    private String symbol;
}
