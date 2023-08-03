package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.entity.Redsite;
import com.shushuo.service.IRedsiteService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
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
@RequestMapping("/redsite")
public class RedsiteController {
    @Autowired
    private IRedsiteService redsiteService;
    @Operation(summary = "红色遗址名录")
    @GetMapping("/list")
    public Result<?> getRedSite(){
        List<Redsite> list = redsiteService.list();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
    @Operation(summary = "红色遗址数量")
    @GetMapping("/size")
    public Result<?> getCount(){
        Long count = -1l;
        count = redsiteService.getCount();
        if(count != -1){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",count);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }

}
