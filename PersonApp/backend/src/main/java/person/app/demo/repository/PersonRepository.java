package person.app.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import person.app.demo.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
