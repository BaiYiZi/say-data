package com.shushuo.service;

import com.shushuo.entity.Attractions;
import com.baomidou.mybatisplus.extension.service.IService;
import com.shushuo.entity.AttractionsCount;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author baomidou
 * @since 2023-07-31
 */
public interface IAttractionsService extends IService<Attractions> {
    List<AttractionsCount> getCountByTag();

}
