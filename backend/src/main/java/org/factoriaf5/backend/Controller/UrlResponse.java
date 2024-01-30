package org.factoriaf5.backend.Controller;

public class UrlResponse {
    private String url;
    private String title;

    public UrlResponse(String url, String title) {
        this.title = title;
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public String getTitle() {
        return title;
    }
}