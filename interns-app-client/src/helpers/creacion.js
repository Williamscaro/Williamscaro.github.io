const creado = [
    { id: 1, creado: "Jorge Coronado" },
  ];
  const getAllcreado = () => creado
  const getcreadoById = (creado_id) => creado.find(({id}) => creado_id === id)
  
  export {getAllcreado, getcreadoById}