package com.evoltion.angularspringapi.controller;

import com.evoltion.angularspringapi.model.Kitchen;
import com.evoltion.angularspringapi.repository.KitchenRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/kitchens")
@AllArgsConstructor
public class KitchenController {

    private KitchenRepository kitchenRepository;

    @GetMapping
//    @RequestMapping(method = RequestMethod.GET)
    public List<Kitchen> list() {
        return kitchenRepository.findAll();
    }
}
