package com.santiago.pizzas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.santiago.pizzas.entity.models.Pizza;
import com.santiago.pizzas.entity.services.IPizzaService;

@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
@RestController
public class PizzaController{
	
	@Autowired
	IPizzaService pizzaService;
	
	@GetMapping("/pizzas")
	public List<Pizza> getAllPizzas(){
		return pizzaService.getAll();
	}
	
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@GetMapping("/pizza/{id}")
	public Pizza getPizza(@PathVariable(value = "id") long id) {
		return pizzaService.get(id);
	}
	
	@PostMapping("/pizza")
	public void add(@RequestBody Pizza pizza) {
		pizzaService.post(pizza);
	}
	
	@PutMapping("/pizza/{id}")
	public void update(@RequestBody Pizza pizza,@PathVariable(value = "id") long id) {
		pizzaService.put(pizza, id);
	}
	
	@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	@DeleteMapping("/pizza/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		pizzaService.delete(id);
	}

}
