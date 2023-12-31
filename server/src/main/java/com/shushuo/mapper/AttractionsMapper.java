package com.shushuo.mapper;

import com.shushuo.entity.Attractions;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.shushuo.common.vo.AttractionsCount;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
public interface AttractionsMapper extends BaseMapper<Attractions> {
    List<AttractionsCount> getCountByTag();

}
