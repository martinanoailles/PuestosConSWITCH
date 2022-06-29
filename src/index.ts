let puestoCompetidor: number = Number(
  prompt("Ingrese en número el puesto del competidor en la carrera:")
);

switch (puestoCompetidor) {
  case 1:
    console.log("Entregar MEDALLA DE ORO (SWITCH)");
    break;
  case 2:
    console.log("Entregar MEDALLA DE PLATA (SWITCH)");
    break;
  case 3:
    console.log("Entregar MEDALLA DE BRONCE (SWITCH)");
    break;
  default:
    console.log("Entregar CERTIFICADO DE PARTICIPACION (SWITCH)");
    break;
}
