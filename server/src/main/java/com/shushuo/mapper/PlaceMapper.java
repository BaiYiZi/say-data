package com.shushuo.mapper;

import com.shushuo.entity.Place;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author baomidou
 * @since 2023-07-31
 */
public interface PlaceMapper extends BaseMapper<Place> {

    Integer getPlaceByType(String type);
    Integer getPlaceByTag(String tag);
    Integer getPlaceByAType(String atype);

}
