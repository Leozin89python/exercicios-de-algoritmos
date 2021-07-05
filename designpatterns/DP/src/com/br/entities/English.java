package com.br.entities;

import com.br.interfaceFabric.Person;

public class English implements Person{

	@Override
	public void brazilian(String a, String b, int c) {
		// TODO Auto-generated method stub
	}

	@Override
	public void british(String a, String b, int c) {
		System.out.println("nacionality: british"
				+","
				+ "name:" 
				+ a
				+","
				+ "language:"
				+b
				+","
				+"cash:"
				+c
				+",00 Libras");
	}

	@Override
	public void spanish(String a, String b, int c) {
		// TODO Auto-generated method stub
	}
	

}
