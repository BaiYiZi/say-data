package com.shushuo.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.shushuo.entity.Accommodationservices;
import com.shushuo.mapper.AccommodationservicesMapper;
import com.shushuo.service.IAccommodationservicesService;
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
public class AccommodationservicesServiceImpl extends ServiceImpl<AccommodationservicesMapper, Accommodationservices> implements IAccommodationservicesService {

    @Override
    public List getList() {
        QueryWrapper<Accommodationservices> wrapper = new QueryWrapper<>();
        wrapper.select("adname,count(0) as count");
        wrapper.groupBy("adname");
        List<Map<String, Object>> maps = this.baseMapper.selectMaps(wrapper);
        return maps;
    }
}
