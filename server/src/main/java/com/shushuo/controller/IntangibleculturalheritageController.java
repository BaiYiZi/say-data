package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.entity.Intangibleculturalheritage;
import com.shushuo.service.IIntangibleculturalheritageService;
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
 * @since 2023-07-31
 */
@RestController
@RequestMapping("/intangibleculturalheritage")
public class IntangibleculturalheritageController {
    @Autowired
    private IIntangibleculturalheritageService service;

    @Operation(summary = "各类别非遗数量")
    @GetMapping("/category")
    public Result<?> getCategory(){
        List list = service.getCategory();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }

    @Operation(summary = "各级别非遗数量")
    @GetMapping("/level")
    public Result<?> getLevel(){
        List list = service.getLevel();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }

    @Operation(summary = "非遗名录")
    @GetMapping("/list")
    public Result<?> getList(){
        List<Intangibleculturalheritage> list = service.list();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
}
