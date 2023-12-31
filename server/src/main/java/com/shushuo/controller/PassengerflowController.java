package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.entity.Passengerflow;
import com.shushuo.service.IPassengerflowService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin
@RequestMapping("/passengerflow")
public class PassengerflowController {
    @Autowired
    private IPassengerflowService passengerFlowService;

    @Operation(summary = "客流指数以及周边拥堵指数拥堵里程平均速度")
    @GetMapping("/list")
    public Result<?> getPassengerFlow(){
        List<Passengerflow> list = passengerFlowService.list();
        return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
    }

    @Operation(summary = "适游指数")
    @GetMapping("/tourworthy")
    public Result<?> getTourworthy(){
        List list = passengerFlowService.getTourworthy();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }

    @Operation(summary = "拥堵指数")
    @GetMapping("/congestion")
    public Result<?> getCongestion(){
        List list = passengerFlowService.getCongestion();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }

}
