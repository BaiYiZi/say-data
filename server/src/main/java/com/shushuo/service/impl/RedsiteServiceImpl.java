package com.shushuo.service.impl;

import com.shushuo.entity.Redsite;
import com.shushuo.mapper.RedsiteMapper;
import com.shushuo.service.IRedsiteService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author star
 * @since 2023-08-03
 */
@Service
public class RedsiteServiceImpl extends ServiceImpl<RedsiteMapper, Redsite> implements IRedsiteService {

    @Override
    public Long getCount() {
        return this.baseMapper.selectCount(null);
    }
}
