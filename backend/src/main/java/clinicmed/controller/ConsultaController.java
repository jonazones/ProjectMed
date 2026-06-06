package clinicmed.controller;

import clinicmed.model.Consulta;
import clinicmed.service.ConsultaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consultas")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ConsultaController {
    private final ConsultaService service;

    @PostMapping
    public ResponseEntity<Consulta> agendar(@RequestBody Consulta consulta) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.salvar(consulta));
    }

    @GetMapping
    public List<Consulta> listar() {
        return service.findAll();
    }
}
