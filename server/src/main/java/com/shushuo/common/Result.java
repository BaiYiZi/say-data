package com.shushuo.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Result<T> {
    private Integer code;
    private String msg;
    private T data;
    public Result(Integer code, String msg){
        this.code = code;
        this.msg = msg;
    }
}
