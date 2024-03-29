package com.apiresttodo1.dto;

import java.io.Serializable;


public class ProductoDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -601919183699348066L;
	


	private Long id;
	
	private String nombre;
	
	private String descripcion;
	

	public ProductoDto() {
		
	}

	public ProductoDto(Long id, String nombre, String descripcion) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
}
