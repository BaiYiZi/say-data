package com.shushuo.mapper;

import com.shushuo.entity.Place;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
public interface PlaceMapper extends BaseMapper<Place> {

    Integer getPlaceByType(String type);
    Integer getPlaceByTag(String tag);
    Integer getPlaceByAType(String atype);
    List<Map<String,Object>> getPlace();

}
