package com.gyxr.mydemo;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;

@Entity
public class Theme {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @ElementCollection
    @MapKeyColumn(name="style_scope", length = 20)
    @CollectionTable(name="theme_style")
    @MapKeyEnumerated(EnumType.STRING)
    private Map<StyleScope, BlockStyle> style = new HashMap<>();

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Map<StyleScope, BlockStyle> getStyle() {
        return style;
    }
}
