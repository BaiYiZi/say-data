package com.shushuo.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.shushuo.entity.Hotel;
import com.shushuo.mapper.HotelMapper;
import com.shushuo.service.IHotelService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author baomidou
 * @since 2023-07-31
 */
@Service
public class HotelServiceImpl extends ServiceImpl<HotelMapper, Hotel> implements IHotelService {

    @Override
    public List<Map<String, Object>> getQuantity() {
        QueryWrapper<Hotel> wrapper = new QueryWrapper<Hotel>();
        wrapper.select("hotel_name","quantity");
        List<Map<String, Object>> maps = this.baseMapper.selectMaps(wrapper);
        return maps;
    }

    @Override
    public List getaddress() {
        QueryWrapper<Hotel> wrapper = new QueryWrapper<Hotel>();
        wrapper.select("address","count(0) as count");
        wrapper.groupBy("address");
        List<Map<String, Object>> maps = this.baseMapper.selectMaps(wrapper);
        return maps;
    }
}
