package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.service.IHotelService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
@RestController
@CrossOrigin
@RequestMapping("/hotel")
public class HotelController {
    @Autowired
    private IHotelService hotelService;

    @Operation(summary = "酒店客房数量")
    @GetMapping("/quantity")
    public Result<?> getQuantity(){
        List<Map<String, Object>> quantity = hotelService.getQuantity();
        if(!quantity.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",quantity);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }

    @Operation(summary = "饭店分布信息")
    @GetMapping("/add")
    public Result<?> getAddress(){
        List list = hotelService.getaddress();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
}
