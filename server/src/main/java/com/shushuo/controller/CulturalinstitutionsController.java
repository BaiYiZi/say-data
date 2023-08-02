package com.shushuo.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.entity.Culturalinstitutions;
import com.shushuo.service.ICulturalinstitutionsService;
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
 * @author baomidou
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
        List<Culturalinstitutions> culturalinstitutionsList = culturalinstiutionsService.list();
        return new Result<>(Code.SELECT_SUCCESS,"查询成功",culturalinstitutionsList);
    }
}
