package com.shushuo.service;

import com.shushuo.entity.Culturalinstitutions;
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
public interface ICulturalinstitutionsService extends IService<Culturalinstitutions> {

    List getculture();

    List getProgram();
}
