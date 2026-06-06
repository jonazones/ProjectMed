// Dados simulados
const consultas = [
  { paciente: "João Silva", especialidade: "Clínico Geral", data: "06/06/2026" },
  { paciente: "Maria Souza", especialidade: "Pediatria", data: "06/06/2026" },
  { paciente: "Carlos Lima", especialidade: "Ortopedia", data: "05/06/2026" }
];

// Atualiza cards
document.getElementById("totalConsultas").innerText = consultas.length;
document.getElementById("consultasHoje").innerText =
  consultas.filter(c => c.data === "06/06/2026").length;
document.getElementById("totalPacientes").innerText = 12;
document.getElementById("especialidadeMaisBuscada").innerText = "Clínico Geral";

// Lista últimas consultas
const lista = document.getElementById("ultimasConsultas");

consultas.forEach(c => {
  const div = document.createElement("div");
  div.className = "consulta";
  div.innerHTML = `<strong>${c.paciente}</strong><br>${c.especialidade} — ${c.data}`;
  lista.appendChild(div);
});