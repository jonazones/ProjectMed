package clinicmed.service;

import clinicmed.model.User;
import clinicmed.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder encoder;

    public User cadastrar(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return repository.save(user);
    }
}