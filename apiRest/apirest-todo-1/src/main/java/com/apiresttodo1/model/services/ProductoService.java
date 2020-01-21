package com.apiresttodo1.model.services;

import java.util.List;

import com.apiresttodo1.dto.ProductoDto;
import com.apiresttodo1.model.entity.Producto;

public interface ProductoService {

	public List<ProductoDto> listProducto(); 
	public Producto save(Producto Producto);
	public void delete(Long id);
	public Producto findById(Long id);
	
}
