package com.evoltion.angularspringapi.controller;

import com.evoltion.angularspringapi.model.Kitchen;
import com.evoltion.angularspringapi.repository.KitchenRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/kitchens")
@AllArgsConstructor
public class KitchenController {

    private KitchenRepository kitchenRepository;

    //    @RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public List<Kitchen> list() {
        return kitchenRepository.findAll();
    }

    //    @RequestMapping(method = RequestMethod.POST)
    @PostMapping
    public ResponseEntity<Kitchen> create(@RequestBody Kitchen kitchen) {
//        kitchenRepository.save(kitchen);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(kitchenRepository.save(kitchen));
    }
}
