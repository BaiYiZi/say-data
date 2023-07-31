package com.shushuo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.shushuo.mapper")
public class ShushuoApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShushuoApplication.class, args);
    }

}
