package org.factoriaf5.backend.Controller;

import java.util.ArrayList;
import java.util.List;

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

    @GetMapping("/urls")
    public List<String> getUrls() {
        return urls;
    }

    @PostMapping("/urls")
    public void addUrl(@RequestBody String url) {
        urls.add(url);
    }
}