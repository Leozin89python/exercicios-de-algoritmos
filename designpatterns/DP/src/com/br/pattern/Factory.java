package com.br.pattern;

import com.br.fabric.ClientFabric;

public class Factory {

	public static void main(String[] args) {
		ClientFabric fabric = new ClientFabric();
		fabric.clients("BRAZIL", "Marcus", "pt-br", 22);
		fabric.clients("spanish", "Ju�n Alvarez", "spanol", 122);
		fabric.clients("british", "Anthony Hopkins", "english", 65);
		fabric.clients("english", "Mauricio", "english", 33);
	}
}
