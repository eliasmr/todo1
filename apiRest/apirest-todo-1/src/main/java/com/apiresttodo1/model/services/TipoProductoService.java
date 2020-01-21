package com.apiresttodo1.model.services;

import java.util.List;

import com.apiresttodo1.model.entity.TipoProducto;

public interface TipoProductoService{

	public List<TipoProducto> findall(); 
	public TipoProducto save(TipoProducto tipoProducto);
	public void delete(Long id);
	public TipoProducto findById(Long id);
}
