package com.shushuo.service;

import com.shushuo.entity.Place;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
public interface IPlaceService extends IService<Place> {

    Integer getPlaceByType(String type);
    Integer getPlaceByTag(String tag);
    Integer getPlaceByAType(String atype);
    List getPlaceNumber();
}
