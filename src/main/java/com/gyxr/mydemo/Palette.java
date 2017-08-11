package com.gyxr.mydemo;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;

@Entity
public class Palette {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @ElementCollection
    @MapKeyColumn(name = "name")
    @CollectionTable(name = "palette_color")
    private Map<String, PaletteColor> colors = new HashMap<>();

    public Map<String, PaletteColor> getColors() {
        return colors;
    }
}
