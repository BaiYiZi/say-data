package com.shushuo.service;

import com.shushuo.entity.Passengerflow;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
public interface IPassengerflowService extends IService<Passengerflow> {

    List getTourworthy();
}
