package com.shushuo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * <p>
 * 
 * </p>
 *
 * @author star
 * @since 2023-08-03
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Museum implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String name;

    private String tag;

    private String level;

    private double visitors;

    private String collection;

    private String artefacts;

    private String address;
}
