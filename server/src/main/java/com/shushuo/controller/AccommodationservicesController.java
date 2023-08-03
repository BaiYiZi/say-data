package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.service.IAccommodationservicesService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author star
 * @since 2023-08-03
 */
@RestController
@RequestMapping("/accommodationservices")
public class AccommodationservicesController {
    @Autowired
    IAccommodationservicesService accommodationservicesService;
    @Operation(summary = "查询各地区住宿服务场所数量")
    @GetMapping("/list")
    public Result<?> getList(){
        List list = accommodationservicesService.getList();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
}
