package com.shushuo.service;

import com.shushuo.entity.Attractions;
import com.baomidou.mybatisplus.extension.service.IService;
import com.shushuo.common.vo.AttractionsCount;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
public interface IAttractionsService extends IService<Attractions> {
    List<AttractionsCount> getCountByTag();

}
