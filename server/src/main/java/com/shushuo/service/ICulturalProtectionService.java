package com.shushuo.service;

import com.shushuo.entity.CulturalProtection;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author star
 * @since 2023-08-07
 */
public interface ICulturalProtectionService extends IService<CulturalProtection> {

    List getType();
}
