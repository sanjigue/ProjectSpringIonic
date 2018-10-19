package com.santiago.pizzas.entity.services;

import java.util.List;

import com.santiago.pizzas.entity.models.Pizza;

public interface IPizzaService {
	public Pizza get(long id);
	public List<Pizza> getAll();
	public void post(Pizza pizza);
	public void put(Pizza pizza,long id);
	public void delete(long id);
}
