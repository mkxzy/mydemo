package com.gyxr.mydemo;

import javax.persistence.*;

@Embeddable
public class BlockStyle {

    @Column(length = 20)
    private String backgroundColor;

    @Column(length = 300)
    private String border;

    @Column(length = 50)
    private String fontFamily;

    @Column(length = 30)
    private String fontSize;

    public String getBackgroundColor() {
        return backgroundColor;
    }

    public void setBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    public String getBorder() {
        return border;
    }

    public void setBorder(String border) {
        this.border = border;
    }

    public String getFontFamily() {
        return fontFamily;
    }

    public void setFontFamily(String fontFamily) {
        this.fontFamily = fontFamily;
    }

    public String getFontSize() {
        return fontSize;
    }

    public void setFontSize(String fontSize) {
        this.fontSize = fontSize;
    }
}
