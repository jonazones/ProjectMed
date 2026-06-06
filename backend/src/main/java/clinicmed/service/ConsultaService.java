package clinicmed.service;

import clinicmed.model.Consulta;
import clinicmed.repository.ConsultaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ConsultaService {
    private final ConsultaRepository repository;

    public Consulta salvar(Consulta consulta) {
        return repository.save(consulta);
    }

    public List<Consulta> findAll() {
        return repository.findAll();
    }
}
