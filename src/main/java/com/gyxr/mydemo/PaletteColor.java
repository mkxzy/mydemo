package com.gyxr.mydemo;

import javax.persistence.Embeddable;

@Embeddable
public class PaletteColor {

    private String color;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
