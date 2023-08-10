package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.entity.Revenue;
import com.shushuo.service.IRevenueService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
@CrossOrigin
@RequestMapping("/revenue")
public class RevenueController {
    @Autowired
    private IRevenueService revenueService;
    @Operation(summary = "查询国内以及国际游客数量及创收")
    @GetMapping("/list")
    public Result<?> getRevenueList(){
        List<Revenue> revenueList = revenueService.list();
        if(!revenueList.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",revenueList);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
}
