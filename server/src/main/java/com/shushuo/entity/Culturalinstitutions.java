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
 * @author baomidou
 * @since 2023-07-31
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Culturalinstitutions implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "ci_id", type = IdType.AUTO)
    private Integer ciId;

    private String year;

    private Integer theaters;

    private Integer publicLibrary;

    private Integer book;

    private Integer museum;

    private Object programCoverage;

}
