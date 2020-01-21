package com.apiresttodo1.model.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.apiresttodo1.dto.ProductoDto;
import com.apiresttodo1.model.entity.Producto;


public interface ProductoRepository  extends JpaRepository<Producto, Long>{
	@Query("select new com.apiresttodo1.dto.ProductoDto(p.id,p.descripcion,tp.nombre)"
	      + " from Producto p "
	      + " inner join  p.tipoProductoId tp ")
	List<ProductoDto> getListProducto();
			

}
