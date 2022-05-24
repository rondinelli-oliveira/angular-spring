package com.evoltion.angularspringapi.repository;

import com.evoltion.angularspringapi.model.Kitchen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KitchenRepository extends JpaRepository<Kitchen, Long> {

}
