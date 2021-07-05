package com.br.fabric;

import com.br.entities.Brazil;
import com.br.entities.English;
import com.br.entities.Spanish;

public class ClientFabric {
	
	protected String name;
	protected String language;
	protected int cash;
	
	public void clients(String country, String name, String language, int cash) {
		this.name = name;
		this.language = language;
		this.cash = cash;
		
		if(country.equalsIgnoreCase("brazil")) {
			Brazil br = new Brazil();
			br.brazilian(name,language,cash);
		}else if(country.equalsIgnoreCase("spanish")) {
			Spanish sp = new Spanish();
			sp.spanish(name,language,cash);
		}else if(country.equalsIgnoreCase("british")){
			English en = new English();
			en.british(name,language,cash);
		}
		else {
			System.out.println("I'm so sorry, option not created yet!");
		}
	}
	
}
