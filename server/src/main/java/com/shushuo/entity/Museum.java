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
public class Museum implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String name;

    private String tag;

    private String level;

    private Object visitors;

    private String collection;

    private String artefacts;

    private String address;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public Object getVisitors() {
        return visitors;
    }

    public void setVisitors(Object visitors) {
        this.visitors = visitors;
    }

    public String getCollection() {
        return collection;
    }

    public void setCollection(String collection) {
        this.collection = collection;
    }

    public String getArtefacts() {
        return artefacts;
    }

    public void setArtefacts(String artefacts) {
        this.artefacts = artefacts;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Museum{" +
            "id = " + id +
            ", name = " + name +
            ", tag = " + tag +
            ", level = " + level +
            ", visitors = " + visitors +
            ", collection = " + collection +
            ", artefacts = " + artefacts +
            ", address = " + address +
        "}";
    }
}
