package com.shushuo.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.shushuo.entity.Activity;
import com.shushuo.mapper.ActivityMapper;
import com.shushuo.service.IActivityService;
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
public class ActivityServiceImpl extends ServiceImpl<ActivityMapper, Activity> implements IActivityService {

    @Override
    public List getActivity() {
        QueryWrapper<Activity> wrapper = new QueryWrapper<>();
        wrapper.select("DATE_FORMAT(time,'%Y%m') as dates","count(0) as count");
        wrapper.groupBy("dates");
        List<Map<String, Object>> maps = this.baseMapper.selectMaps(wrapper);
        return maps;
    }
}
