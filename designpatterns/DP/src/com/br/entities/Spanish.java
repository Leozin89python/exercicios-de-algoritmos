package com.br.entities;

import com.br.interfaceFabric.Person;

public class Spanish implements Person{

	@Override
	public void brazilian(String a, String b, int c) {
		// TODO Auto-generated method stub
	}

	@Override
	public void british(String a, String b, int c) {
		// TODO Auto-generated method stub
	}

	@Override
	public void spanish(String a, String b, int c) {
		System.out.println("nacionalidad: spanol"
				+","
				+ "nombre:" 
				+ a
				+","
				+ "idioma:"
				+b
				+","
				+"dinero:"
				+c
				+",00 Euros");
	}
	

}
