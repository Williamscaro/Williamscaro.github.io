const tipo = [
    { id: 1, tipo: "Tarea" },
    { id: 2, tipo: "Examen" },
  ];
  const getAlltipo = () => tipo
  const gettipoById = (tipo_id) => tipo.find(({id}) => tipo_id === id)
  
  export {getAlltipo, gettipoById}