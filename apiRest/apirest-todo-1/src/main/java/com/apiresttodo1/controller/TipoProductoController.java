package com.apiresttodo1.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apiresttodo1.model.entity.TipoProducto;
import com.apiresttodo1.model.services.TipoProductoService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping(value = "/api")
public class TipoProductoController {

	@Autowired
	private TipoProductoService tipoProductoService;
	
	private final Map<String, Object> response = new HashMap<>();
	
	@GetMapping("/listTipoProducto")
	public List<TipoProducto> listTipoProducto(){
		return (List<TipoProducto>) tipoProductoService.findall();
	}
	
	@PostMapping("/saveTipoProducto")
	public ResponseEntity<?> saveTipoProdcto(@RequestBody TipoProducto tipoProducto) {
		TipoProducto tipoProductoResponse = null;
		tipoProductoResponse = tipoProductoService.save(tipoProducto);
		tipoProductoService.findall();
		response.put("ok", tipoProductoResponse);
		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteTipoProdcto")
	public void deleteTipoProdcto(Long id) {
		tipoProductoService.delete(id);
	}
	
	@GetMapping(path ="/buscaTipoProductoById/{id}")
	public ResponseEntity<?> buscaProductoById(@PathVariable("id") Long id) {
		TipoProducto tipoProductoResponse = null;
		tipoProductoResponse = tipoProductoService.findById(id);
		response.put("update", tipoProductoResponse);
		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.ACCEPTED);
	}
	
	@PostMapping("/updateTipoProducto")
	public ResponseEntity<?> updateTipoProducto(@RequestBody TipoProducto tipoProducto) {
		TipoProducto tipoProductoResponse = null;
		tipoProductoResponse = tipoProductoService.findById(tipoProducto.getId());
		tipoProductoResponse.setNombre(tipoProducto.getNombre());
		tipoProductoResponse = tipoProductoService.save(tipoProductoResponse);
		response.put("udpate", tipoProductoResponse);
		return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
	}
	
}
