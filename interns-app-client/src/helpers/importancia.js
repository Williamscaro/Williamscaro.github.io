const importancia = [
    { id: 1, importancia: "Alta" },
    { id: 2,  importancia: "Media" },
    { id: 3,  importancia: "Baja" },
  ];
  const getAllImportancia = () => importancia
  const getImportanciaById = (status_id) => importancia.find(({id}) => status_id === id)
  
  export {getAllImportancia, getImportanciaById}