package com.shushuo.service.impl;

import com.shushuo.entity.Place;
import com.shushuo.mapper.PlaceMapper;
import com.shushuo.service.IPlaceService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
@Service
public class PlaceServiceImpl extends ServiceImpl<PlaceMapper, Place> implements IPlaceService {

    @Override
    public Integer getPlaceByType(String type) {
        return this.baseMapper.getPlaceByType(type);
    }

    @Override
    public Integer getPlaceByTag(String tag) {
        return this.baseMapper.getPlaceByTag(tag);
    }

    @Override
    public Integer getPlaceByAType(String atype) {
        return this.baseMapper.getPlaceByAType(atype);
    }

    @Override
    public List getPlaceNumber() {
        return this.baseMapper.getPlace();
    }

}
