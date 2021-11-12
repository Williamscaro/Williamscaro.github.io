import React  , {useState,useEffect} from 'react'
import {getAllImportancia, getImportanciaById} from '../helpers/importancia'
import {getAllestado, getestadoById} from '../helpers/estado'
import {getAllcreado, getcreadoById} from '../helpers/creacion'
import {getAllgrupo, getgrupoById} from '../helpers/grupo'
import {getAlltipo, gettipoById} from '../helpers/tipo'



export default function FiltradoTicket() {

    const [ImportanciaStatus, setImportanciaStatus] = useState([])
    const [ImportanciaStatusId, setImportanciaStatusId] = useState(0)

    useEffect(() => {

        const datalImportanciaStatus = getAllImportancia()
        setImportanciaStatus(datalImportanciaStatus)

    })
    const handleImportanciaStatusChange = (e) => setImportanciaStatusId(e.target.value)



    
    const [estadoStatus, setestadoStatus] = useState([])
    const [estadoStatusId, seteestadoStatusId] = useState(0)

    useEffect(() => {

        const datalestadoStatus = getAllestado()
        setestadoStatus(datalestadoStatus)

    })
    const handleestadoStatusChange = (e) => seteestadoStatusId(e.target.value)


        
    const [creadoStatus, setcreadoStatus] = useState([])
    const [creadoStatusId, setecreadoStatusId] = useState(0)

    useEffect(() => {

        const datalcreadoStatus = getAllcreado()
        setcreadoStatus(datalcreadoStatus)

    })
    const handlecreadoStatusChange = (e) => setecreadoStatusId(e.target.value)




    const [grupoStatus, setgrupoStatus] = useState([])
    const [grupoStatusId, setegrupoStatusId] = useState(0)

    useEffect(() => {

        const datalgrupoStatus = getAllgrupo()
        setgrupoStatus(datalgrupoStatus)

    })
    const handlegrupoStatusChange = (e) => setetipoStatusId(e.target.value)



  
    const [tipoStatus, settipoStatus] = useState([])
    const [tipoStatusId, setetipoStatusId] = useState(0)

    useEffect(() => {

        const dataltipoStatus = getAlltipo()
        settipoStatus(dataltipoStatus)

    })
    const handletipoStatusChange = (e) => setetipoStatusId(e.target.value)



    return (
        <div>
 
             <div className="form-group  mb-4 mt-2">
              <input type="text" className="form-control w-100" id="Nombre_Asignacion" aria-describedby="" placeholder="Nombre de la asignacion"/>
            </div>

            <div className="form-group  mb-4">
              <input type="text" className="form-control w-100" id="N_de_la_asignacion" aria-describedby="emailHelp" placeholder="No. de la asignacion"/>
            </div>

            <select className="form-select mb-4" id="province" required="" onChange = {handleImportanciaStatusChange}>
                <option value="" >Importancia</option>
                {ImportanciaStatus.map(({importancia, id}) => <option value = {id}>{importancia}</option>)}
              </select>


             <select className="form-select mb-4" id="province" required="" onChange = {handleestadoStatusChange}>
                <option value="" >Estado</option>
                {estadoStatus.map(({estado, id}) => <option value = {id}>{estado}</option>)}
              </select>

              <select className="form-select mb-4" id="province" required="" onChange = {handlecreadoStatusChange}>
                <option value="" >Creada por</option>
                {creadoStatus.map(({creado, id}) => <option value = {id}> Creado por {creado}</option>)}
              </select>



              <select className="form-select mb-4" id="province" required="" onChange= {handlegrupoStatusChange}>
                <option value="" >Grupo</option>
                {grupoStatus.map(({grupo, id}) => <option value = {id}>{grupo}</option>)}
              </select>


              <select className="form-select mb-4" id="province" required="" onChange= {handletipoStatusChange}>
                <option value="" >Tipo</option>
                {tipoStatus.map(({tipo, id}) => <option value = {id}>{tipo}</option>)}
              </select>




        </div>
    )
}
