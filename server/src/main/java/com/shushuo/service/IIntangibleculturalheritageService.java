package com.shushuo.service;

import com.shushuo.entity.Intangibleculturalheritage;
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
public interface IIntangibleculturalheritageService extends IService<Intangibleculturalheritage> {

    List getCategory();

    List getLevel();
}
