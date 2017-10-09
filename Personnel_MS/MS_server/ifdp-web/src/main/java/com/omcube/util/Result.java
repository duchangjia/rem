package com.omcube.util;

import java.util.List;

public class Result<T> {

    private long total;
    private List<T> model;
    
    public long getTotal()
    {
        return total;
    }
    public void setTotal(long total)
    {
        this.total = total;
    }
    public List<T> getModel()
    {
        return model;
    }
    public void setModel(List<T> model)
    {
        this.model = model;
    }
    
}
