package com.gyxr.mydemo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.List;

@RestController
public class ThemeController {

    private Logger log = LoggerFactory.getLogger(ThemeController.class);

    @Autowired
    private ThemeRepository themeRepository;

    @GetMapping("/theme/{id}")
    public void getTheme(@PathVariable Long id, HttpServletResponse response) throws IOException {

        log.debug("id: " + id);
        StringBuilder sb = new StringBuilder();
        sb.append("body\n" +
                "{\n" +
                "    background-color:#d0e4fe;\n" +
                "}");
        response.addHeader("Content-Type", "text/css");
        try(OutputStreamWriter ow = new OutputStreamWriter(response.getOutputStream())) {
            ow.write(sb.toString());
        }
    }

    @PostMapping("/theme")
    public Theme post(@RequestBody Theme theme){
        Theme saved = themeRepository.save(theme);
        return saved;
    }

    @GetMapping("/theme")
    public List<Theme> get(){
        return themeRepository.findAll();
    }
}
