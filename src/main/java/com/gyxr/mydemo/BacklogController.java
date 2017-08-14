package com.gyxr.mydemo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/backlog")
public class BacklogController {

    private final BacklogRepository backlogRepository;

    public BacklogController(BacklogRepository backlogRepository){
        this.backlogRepository = backlogRepository;
    }

    @PostMapping
    public void post(@RequestBody Backlog backlog){
        this.backlogRepository.save(backlog);
    }

    @GetMapping
    public List<Backlog> getAll(){
        return this.backlogRepository.findAll();
    }
}
