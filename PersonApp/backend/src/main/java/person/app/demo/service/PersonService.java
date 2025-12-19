package person.app.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import person.app.demo.model.Person;
import person.app.demo.repository.PersonRepository;

@Service
public class PersonService {

    private final PersonRepository repo;

    public PersonService(PersonRepository repo) {
        this.repo = repo;
    }

    public List<Person> getAll() {
        return repo.findAll();
    }

    public Optional<Person> getById(Long id) {
        return repo.findById(id);
    }

    public Person save(Person p) {
        if (p.getFirstName() == null || p.getFamilyName() == null) {
            throw new IllegalArgumentException("Imię i nazwisko są wymagane");
        }
        return repo.save(p);
    }

    public void deleteById(Long id) {
        repo.deleteById(id);
    }
}
