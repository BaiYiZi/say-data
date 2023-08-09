package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.entity.Culturalinstitutions;
import com.shushuo.service.ICulturalinstitutionsService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/culturalinstitutions")
public class CulturalinstitutionsController {

    @Autowired
    private ICulturalinstitutionsService culturalinstiutionsService;

    @Operation(summary = "各类文化机构情况")
    @GetMapping("/list")
    public Result<?> getCulturalList(){
        List culturalinstitutionsList = culturalinstiutionsService.getculture();
        if(!culturalinstitutionsList.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",culturalinstitutionsList);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
    @Operation(summary = "广播电视覆盖率")
    @GetMapping("/program")
    public Result<?> getProgram(){
        List list = culturalinstiutionsService.getProgram();
        if(!list.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",list);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
}
