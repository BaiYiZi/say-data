package com.shushuo.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.entity.Attractions;
import com.shushuo.common.vo.AttractionsCount;
import com.shushuo.service.IAttractionsService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
@CrossOrigin
@RequestMapping("/attractions")
public class AttractionsController {
    @Autowired
    private IAttractionsService attractionsService;
    @Operation(summary = "根据景区名字获取景区基本信息")
    @GetMapping("/name/{name}")
    public Result<?> getAttractionsByname(@PathVariable("name") String name){
        LambdaQueryWrapper<Attractions> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(Attractions::getAttractionsName,name);
        Attractions attractions = attractionsService.getOne(wrapper);
        if(attractions!=null){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",attractions);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }

    @Operation(summary = "根据景区id获取景区基本信息")
    @GetMapping("/id/{id}")
    public Result<?> getAttractionsById(@PathVariable("id") Integer id){
        Attractions attractions = attractionsService.getById(id);
        if(attractions != null){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",attractions);
        }
        return new Result<>(Code.SELECT_ERROR,"查询成功");
    }

    @Operation(summary = "获取各类别景区数量")
    @GetMapping("/count")
    public Result<?> getCountByTag(){
        List<AttractionsCount> attractionsCount = attractionsService.getCountByTag();
        if(attractionsCount != null){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",attractionsCount);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
}
