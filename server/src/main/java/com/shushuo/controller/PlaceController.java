package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.service.impl.PlaceServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author baomidou
 * @since 2023-07-31
 */
@RestController
@RequestMapping("/place")
public class PlaceController {

    @Autowired
    private PlaceServiceImpl placeService;

    @Operation(summary = "查询各类别休闲场所数量")
    @GetMapping("/{type}")
    public Result<?> getPlaceByType(@PathVariable("type") String type){
        Integer integer = placeService.getPlaceByType(type);
        return new Result<>(Code.SELECT_SUCCESS,"查询成功",integer);
    }
    //公园
}
