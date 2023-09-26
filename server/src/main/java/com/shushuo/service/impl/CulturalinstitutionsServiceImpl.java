package com.shushuo.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.shushuo.entity.Culturalinstitutions;
import com.shushuo.mapper.CulturalinstitutionsMapper;
import com.shushuo.service.ICulturalinstitutionsService;
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
public class CulturalinstitutionsServiceImpl extends ServiceImpl<CulturalinstitutionsMapper, Culturalinstitutions> implements ICulturalinstitutionsService {

    @Override
    public List getculture() {
        QueryWrapper wrapper = new QueryWrapper();
        wrapper.select("year","Theaters","public_library","museum");
        return this.baseMapper.selectMaps(wrapper);
    }

    @Override
    public List getProgram() {
        QueryWrapper wrapper = new QueryWrapper();
        wrapper.select("year","program_coverage");
        return this.baseMapper.selectMaps(wrapper);
    }
}
