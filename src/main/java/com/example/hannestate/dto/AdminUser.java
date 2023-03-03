package com.example.hannestate.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AdminUser {
    @Id
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
