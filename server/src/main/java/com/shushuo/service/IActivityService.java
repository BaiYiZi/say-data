package com.shushuo.service;

import com.shushuo.entity.Activity;
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
public interface IActivityService extends IService<Activity> {

    List getActivity();
}
