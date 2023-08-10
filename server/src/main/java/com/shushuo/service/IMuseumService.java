package com.shushuo.service;

import com.shushuo.entity.Museum;
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
public interface IMuseumService extends IService<Museum> {

    List getAddress();

    List getVisitors();
}
