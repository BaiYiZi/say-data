package com.shushuo.service;

import com.shushuo.entity.Hotel;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
public interface IHotelService extends IService<Hotel> {

    List<Map<String,Object>> getQuantity();

    List getaddress();
}
