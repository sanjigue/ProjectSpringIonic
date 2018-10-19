package com.santiago.pizzas.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name = "pizza")

public class Pizza implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private String tipoMasa;

	
	
	public Pizza(@NotEmpty String name, @NotEmpty String tipoMasa) {
		super();
		this.name = name;
		this.tipoMasa = tipoMasa;
	}
	

	public Pizza() {
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTipoMasa() {
		return tipoMasa;
	}

	public void setTipoMasa(String tipoMasa) {
		this.tipoMasa = tipoMasa;
	}
	
	
}
