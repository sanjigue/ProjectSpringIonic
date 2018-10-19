package com.santiago.pizzas.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.santiago.pizzas.entity.dao.IPizzaDao;
import com.santiago.pizzas.entity.models.Pizza;

@Service
public class PizzaServiceImpl implements IPizzaService{

	@Autowired
	private IPizzaDao pizzaDao;
	
	@Override
	public Pizza get(long id) {
		return pizzaDao.findById(id).get();
	}

	@Override
	public List<Pizza> getAll() {
		return (List<Pizza>) pizzaDao.findAll();
	}

	@Override
	public void post(Pizza pizza) {
		pizzaDao.save(pizza);
	}

	@Override
	public void put(Pizza pizza, long id) {
		pizzaDao.findById(id).ifPresent((x)->{
			pizza.setId(id);
			pizzaDao.save(pizza);
		});
	}

	@Override
	public void delete(long id) {
		pizzaDao.deleteById(id);
		
	}
}
