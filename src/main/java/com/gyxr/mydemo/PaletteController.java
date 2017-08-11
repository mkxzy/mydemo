package com.gyxr.mydemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/palette")
public class PaletteController {

    @Autowired
    private PaletteRepository paletteRepository;

    @PostMapping
    public Palette post(@RequestBody Palette model){

        Palette saved = paletteRepository.save(model);
        return saved;
    }

    @GetMapping
    public List<Palette> findAll(){

        Sort sort = new Sort(Sort.Direction.DESC, "id");
        Pageable pageable = new PageRequest(0, 5); //从第0页开始
        Page<Palette> page = paletteRepository.findAll(pageable);
        return page.getContent();
    }
}
