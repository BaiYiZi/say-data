package com.shushuo.service;

import com.shushuo.entity.Accommodationservices;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author star
 * @since 2023-08-03
 */
public interface IAccommodationservicesService extends IService<Accommodationservices> {

    List getList();
}
