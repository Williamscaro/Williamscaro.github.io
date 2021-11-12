const STATUS = [
  { id: 1, status_description: "Estudiante de Nuevo Ingreso" },
  { id: 2, status_description: "Estudiante de Mitad de Carrera" },
  { id: 3, status_description: "Estudiante de Termino" },
  { id: 4, status_description: "Estudiante Egresado" },
];
const getAllStatus = () => STATUS
const getStatusById = (status_id) => STATUS.find(({id}) => status_id === id)

export {getAllStatus, getStatusById}