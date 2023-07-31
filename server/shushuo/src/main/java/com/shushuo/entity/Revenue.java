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
@NoArgsConstructor
@AllArgsConstructor
public class Revenue implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private String year;

    private Object domesticTourists;

    private Object drevenue;

    private Object internationalVisitors;

    private Object irevenue;

}
