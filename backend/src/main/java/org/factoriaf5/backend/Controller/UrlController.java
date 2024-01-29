package org.factoriaf5.backend.Controller;

import java.util.ArrayList;
import java.util.List;

import org.factoriaf5.backend.Persistence.Url;
import org.factoriaf5.backend.Persistence.UrlRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class UrlController {

    private List<String> urls = new ArrayList<>();

    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    @GetMapping("/url")
    public List<UrlResponse> getUrls() {
        List<UrlResponse> url = new ArrayList<UrlResponse>();
        List<Url> urlInDatabase = repository.findAll();
        for (Url url : urlInDatabase) {
        urls.add(new UrlResponse(url.getId(), url.getTitle()));
    }
    return urls;
      
    }

    @PostMapping("/url")
    public void addUrl(@RequestBody String url) {
        urls.add(url);
    }
    private UrlRepository repository;
    public UrlRepository (@Autowired UrlRepository repository) {
        this.repository = repository;
    }

}