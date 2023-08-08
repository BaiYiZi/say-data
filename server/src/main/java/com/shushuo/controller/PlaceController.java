package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.service.IPlaceService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author star
 * @since 2023-07-31
 */
@RestController
@RequestMapping("/place")
public class PlaceController {

    @Autowired
    private IPlaceService placeService;

    @Operation(summary = "查询各类别休闲场所数量")
    @GetMapping("/type/{type}")
    public Result<?> getPlaceByType(@PathVariable("type") String type){
        Integer place = placeService.getPlaceByType(type);
        if(place != null){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",place);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
    @Operation(summary = "查询某类别休闲场所各种类数量")
    @GetMapping("/tag/{tag}")
    public Result<?> getPlaceByTag(@PathVariable("tag") String tag){
        Integer place = placeService.getPlaceByTag(tag);
        if(place != null){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",place);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
    @Operation(summary = "查询某大区块数量")
    @GetMapping("/atype/{atype}")
    public Result<?> getPlaceByAType(@PathVariable("atype") String atype){
        Integer place = placeService.getPlaceByAType(atype);
        if(place != null){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",place);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
    @Operation(summary = "各大类数量")
    @GetMapping("/number")
    public Result<?> getNumber(){
        List list = placeService.getPlaceNumber();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
}
