package com.shushuo.service.impl;

import com.shushuo.entity.Passengerflow;
import com.shushuo.mapper.PassengerflowMapper;
import com.shushuo.service.IPassengerflowService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
@Service
public class PassengerflowServiceImpl extends ServiceImpl<PassengerflowMapper, Passengerflow> implements IPassengerflowService {

    @Override
    public List getTourworthy() {
        List<Passengerflow> passengerflows = this.baseMapper.selectList(null);
        List<Map<String,Object>> list = new ArrayList<>();
        for (Passengerflow passengerflow : passengerflows) {
            HashMap<String, Object> map = new HashMap<>();
            map.put(passengerflow.getName(),0.1*passengerflow.getFootfallIndex()+0.3*passengerflow.getCongestionIndex());
            list.add(map);
        }
        return list;
    }
}
