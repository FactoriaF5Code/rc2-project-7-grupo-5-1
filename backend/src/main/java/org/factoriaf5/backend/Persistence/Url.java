package org.factoriaf5.backend.Persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name="url")
public class Url {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String url;
    private String title;

    public Url() {
    }

    public Url(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public String getTitle() {
        return title;
    }
}