package com.gyxr.mydemo;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum StyleScope {

    @JsonProperty("global")
    MAIN,
    @JsonProperty("module")
    MODULE,
    @JsonProperty("holder")
    HOLDER
}
