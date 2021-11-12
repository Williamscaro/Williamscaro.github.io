const grupo = [
    { id: 1, grupo: "Alfa" },
    { id: 2, grupo: "Beta" },
    { id: 3, grupo: "Delta" },
    { id: 4, grupo: "Episilon" },
  ];
  const getAllgrupo = () => grupo
  const getgrupoById = (grupo_id) => grupo.find(({id}) => grupo_id === id)
  
  export {getAllgrupo, getgrupoById}