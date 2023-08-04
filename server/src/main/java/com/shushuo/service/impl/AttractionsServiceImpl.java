package com.shushuo.service.impl;

import com.shushuo.entity.Attractions;
import com.shushuo.entity.AttractionsCount;
import com.shushuo.mapper.AttractionsMapper;
import com.shushuo.service.IAttractionsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

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
public class AttractionsServiceImpl extends ServiceImpl<AttractionsMapper, Attractions> implements IAttractionsService {

    @Override
    public List<AttractionsCount> getCountByTag() {
        return this.baseMapper.getCountByTag();
    }
}
