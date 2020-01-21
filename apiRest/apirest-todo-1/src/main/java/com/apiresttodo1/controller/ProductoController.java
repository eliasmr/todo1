package com.apiresttodo1.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiresttodo1.dto.ProductoDto;
import com.apiresttodo1.model.entity.Producto;
import com.apiresttodo1.model.services.ProductoService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping(value = "/api")
public class ProductoController {
	
	@Autowired
	private ProductoService productoService;
	
	private final Map<String, Object> response = new HashMap<>();
	
	@GetMapping("/listaProducto")
	public List<ProductoDto> listaProducto(){
		return (List<ProductoDto>) productoService.listProducto();
	}
	
	@PostMapping("/saveProducto")
	public ResponseEntity<?>  saveProducto(@RequestBody  Producto producto) {
		
		Producto productoResponse = null;
		productoResponse = productoService.save(producto);
		productoService.listProducto();
		response.put("ok", productoResponse);
		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteProdcto")
	public void deleteProdcto(Long id) {
		productoService.delete(id);
	}
	
	@GetMapping("/buscaProductoById")
	public Producto buscaProductoById(Long id) {
	   return	productoService.findById(id);
	}

}
