package org.factoriaf5.backend.Controller;

public class UrlResponse {
    private Long id;
    private String url;
    private String title;

    public UrlResponse(Long id, String url, String title) {
        this.id = id;
        this.title = title;
        this.url = url;
    }

    public UrlResponse(String title, String url) {
        this.title = title;
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public String getTitle() {
        return title;
    }

    public Long getId() {
        return id;
    }
}