package com.shushuo.entity;

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
 * @since 2023-07-31
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Intangibleculturalheritage implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer serialNumber;

    private String category;

    private String bttb;

    private String numbering;

    private String name;

    private String level;

}
