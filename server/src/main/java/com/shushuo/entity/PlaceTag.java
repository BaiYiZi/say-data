package com.shushuo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
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
@TableName("place_tag")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlaceTag implements Serializable {

    private static final long serialVersionUID = 1L;

    private String type;

    @TableId(value = "tag_id", type = IdType.AUTO)
    private Integer tagId;

    private String tagName;

}
