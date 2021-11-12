const estado = [
    { id: 1, estado: "Activa" },
    { id: 2,  estado: "Descactivada" },
  ];
  const getAllestado = () => estado
  const getestadoById = (estado_id) => estado.find(({id}) => estado_id === id)
  
  export {getAllestado, getestadoById}