package com.apiresttodo1.model.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "producto")
public class Producto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5962108820696942453L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String descripcion;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "tipoProductoId")
	private TipoProducto tipoProductoId;
	
	
	public Producto() {
		
	}

	public Producto(Long id, String descripcion, TipoProducto tipoProductoId) {
		this.id = id;
		this.descripcion = descripcion;
		this.tipoProductoId = tipoProductoId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}



	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public TipoProducto getTipoProductoId() {
		return tipoProductoId;
	}

	public void setTipoProductoId(TipoProducto tipoProductoId) {
		this.tipoProductoId = tipoProductoId;
	}


}
