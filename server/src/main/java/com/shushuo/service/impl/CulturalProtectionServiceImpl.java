package com.shushuo.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.shushuo.entity.CulturalProtection;
import com.shushuo.mapper.CulturalProtectionMapper;
import com.shushuo.service.ICulturalProtectionService;
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
 * @since 2023-08-07
 */
@Service
public class CulturalProtectionServiceImpl extends ServiceImpl<CulturalProtectionMapper, CulturalProtection> implements ICulturalProtectionService {

    @Override
    public List getType() {
        QueryWrapper<CulturalProtection> wrapper = new QueryWrapper<>();
        wrapper.select("type","count(0) as count");
        wrapper.groupBy("type");
        List<Map<String, Object>> maps = this.baseMapper.selectMaps(wrapper);
        return maps;
    }
}
