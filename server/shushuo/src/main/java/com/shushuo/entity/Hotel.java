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
public class Hotel implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "hotel_id", type = IdType.AUTO)
    private Integer hotelId;

    private String hotelName;

    private String level;

    private String address;
}
