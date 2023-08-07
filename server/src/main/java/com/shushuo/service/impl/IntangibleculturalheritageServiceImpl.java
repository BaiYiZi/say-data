package com.shushuo.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.shushuo.entity.Intangibleculturalheritage;
import com.shushuo.mapper.IntangibleculturalheritageMapper;
import com.shushuo.service.IIntangibleculturalheritageService;
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
 * @since 2023-07-31
 */
@Service
public class IntangibleculturalheritageServiceImpl extends ServiceImpl<IntangibleculturalheritageMapper, Intangibleculturalheritage> implements IIntangibleculturalheritageService {

    @Override
    public List getCategory() {
        QueryWrapper<Intangibleculturalheritage> wrapper = new QueryWrapper<>();
        wrapper.select("category","count(0) as count");
        wrapper.groupBy("category");
        List<Map<String, Object>> maps = this.baseMapper.selectMaps(wrapper);
        return maps;
    }

    @Override
    public List getLevel() {
        QueryWrapper<Intangibleculturalheritage> wrapper = new QueryWrapper<>();
        wrapper.select("level","count(0) as count");
        wrapper.groupBy("level");
        List<Map<String, Object>> maps = this.baseMapper.selectMaps(wrapper);
        return maps;
    }
}
