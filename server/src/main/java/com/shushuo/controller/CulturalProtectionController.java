package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.service.ICulturalProtectionService;
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
 * @since 2023-08-07
 */
@RestController
@CrossOrigin
@RequestMapping("/culturalProtection")
public class CulturalProtectionController {
    @Autowired
    private ICulturalProtectionService culturalProtectionService;

    @Operation(summary = "各类别文保数量")
    @GetMapping("/type")
    public Result<?> getType(){
        List list = culturalProtectionService.getType();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
}
