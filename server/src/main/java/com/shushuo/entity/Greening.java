package com.shushuo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author star
 * @since 2023-08-03
 */
public class Greening implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private Object area;

    private Object aarea;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Object getArea() {
        return area;
    }

    public void setArea(Object area) {
        this.area = area;
    }

    public Object getAarea() {
        return aarea;
    }

    public void setAarea(Object aarea) {
        this.aarea = aarea;
    }

    @Override
    public String toString() {
        return "Greening{" +
            "id = " + id +
            ", area = " + area +
            ", aarea = " + aarea +
        "}";
    }
}
