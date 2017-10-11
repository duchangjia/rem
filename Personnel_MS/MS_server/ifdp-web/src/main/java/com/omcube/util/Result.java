package com.omcube.util;

import java.util.List;

public class Result<T> {

    private long total;
    private List<T> models;

    public long getTotal() {
	return total;
    }

    public void setTotal(long total) {
	this.total = total;
    }

    public List<T> getModels() {
        return models;
    }

    public void setModels(List<T> models) {
        this.models = models;
    }

}
