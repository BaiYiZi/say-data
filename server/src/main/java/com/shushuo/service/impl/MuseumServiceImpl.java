package com.shushuo.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.shushuo.entity.Museum;
import com.shushuo.mapper.MuseumMapper;
import com.shushuo.service.IMuseumService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author star
 * @since 2023-08-03
 */
@Service
public class MuseumServiceImpl extends ServiceImpl<MuseumMapper, Museum> implements IMuseumService {

    @Override
    public List getAddress() {
        QueryWrapper<Museum> wrapper = new QueryWrapper<>();
        wrapper.select("address","count(0) as count");
        wrapper.groupBy("address");
        List<Map<String, Object>> maps = this.baseMapper.selectMaps(wrapper);
        return maps;
    }

    @Override
    public List getVisitors() {
        QueryWrapper<Museum> wrapper = new QueryWrapper<>();
        wrapper.select("name","visitors");
        wrapper.orderByDesc("visitors");
        List<Map<String, Object>> maps = this.baseMapper.selectMaps(wrapper);
        return maps;
    }
}
