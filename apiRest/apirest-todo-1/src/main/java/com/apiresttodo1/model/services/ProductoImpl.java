package com.apiresttodo1.model.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apiresttodo1.dto.ProductoDto;
import com.apiresttodo1.model.dao.ProductoRepository;
import com.apiresttodo1.model.entity.Producto;

@Service
public class ProductoImpl implements ProductoService{

	@Autowired
	private ProductoRepository productoRepository;
	
	@Override
	@Transactional(readOnly = true)
	public List<ProductoDto> listProducto() {
		// TODO Auto-generated method stub
		return (List<ProductoDto>) productoRepository.getListProducto();
	}

	@Override
	@Transactional
	public Producto save(Producto Producto) {
		// TODO Auto-generated method stub
		return productoRepository.save(Producto);
	}

	@Override
	@Transactional(readOnly = true)
	public void delete(Long id) {
		// TODO Auto-generated method stub
		productoRepository.deleteById(id);
		
	}

	@Override
	@Transactional(readOnly = true)
	public Producto findById(Long id) {
		// TODO Auto-generated method stub
		return productoRepository.findById(id).orElse(null);
	}


}
