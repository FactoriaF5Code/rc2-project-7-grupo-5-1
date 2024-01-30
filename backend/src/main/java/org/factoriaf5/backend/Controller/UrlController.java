package org.factoriaf5.backend.Controller;

import java.util.ArrayList;
import java.util.List;

import org.factoriaf5.backend.Persistence.Url;
import org.factoriaf5.backend.Persistence.UrlRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UrlController {

    private UrlRepository repository;

    public UrlController(UrlRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/urls")
    public UrlResponse createUrl(@RequestBody UrlRequest request) {
        Url url = new Url(request.getTitle(), request.getUrl());
        Url savedUrl = repository.save(url);
        return new UrlResponse(savedUrl.getTitle(), savedUrl.getUrl());
    }

    @GetMapping("/urls")
    public List<UrlResponse> getUrls() {
        List<UrlResponse> urls = new ArrayList<UrlResponse>();
        List<Url> urlInDatabase = repository.findAll();
        for (Url urlItem : urlInDatabase) {
            urls.add(new UrlResponse(urlItem.getTitle(), urlItem.getUrl()));
        }
        return urls;
    }

}