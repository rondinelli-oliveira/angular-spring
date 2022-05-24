package com.evoltion.angularspringapi;

import com.evoltion.angularspringapi.model.Kitchen;
import com.evoltion.angularspringapi.repository.KitchenRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AngularSpringApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngularSpringApiApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(KitchenRepository kitchenRepository) {
		return args -> {
			kitchenRepository.deleteAll();

			Kitchen kitchen = new Kitchen();
			kitchen.setName("Brasileira");
			kitchen.setCategory("Categoria");
			kitchen.setSymbol("Brasil");

			Kitchen kitchen1 = new Kitchen();
			kitchen1.setName("Japonesa");
			kitchen1.setCategory("Categoria");
			kitchen1.setSymbol("Japão");

			Kitchen kitchen2 = new Kitchen();
			kitchen2.setName("Argentina");
			kitchen2.setCategory("Categoria");
			kitchen2.setSymbol("Argentina");

			kitchenRepository.save(kitchen);
			kitchenRepository.save(kitchen1);
			kitchenRepository.save(kitchen2);
		};
	}

}
