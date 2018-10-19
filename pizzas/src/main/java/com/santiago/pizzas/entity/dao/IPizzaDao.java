package com.santiago.pizzas.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.santiago.pizzas.entity.models.Pizza;

public interface IPizzaDao extends CrudRepository<Pizza, Long>{
	
}
