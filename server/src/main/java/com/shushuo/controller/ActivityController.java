package com.shushuo.controller;

import com.shushuo.common.Code;
import com.shushuo.common.Result;
import com.shushuo.service.IActivityService;
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
 * @since 2023-08-03
 */
@RestController
@RequestMapping("/activity")
public class ActivityController {

    @Autowired
    private IActivityService activityService;

    @Operation(summary = "文旅局活动频率")
    @GetMapping("/activity")
    public Result<?> getActivity(){
        List activity = activityService.getActivity();
        if(!activity.isEmpty()){
            return new Result<>(Code.SELECT_SUCCESS,"查询成功",activity);
        }
        return new Result<>(Code.SELECT_ERROR,"查询失败");
    }
}
