import Home from '../pages/Home/index'

const routes = [
    {
      path: "/Home",
      component: Home,
    },
    {
      path: "/Registro",
      component: FacturacionLayout,
      routes: [
        {
              path: "/facturacion/CargosPacientes",
              component: CargosPacientes,
              name: "Agregar Cargos",
              permiso: 0
        },
        {
          path: "/facturacion/caja",
          component: Caja,
          name: "Caja",
        },
        {
          path: "/facturacion/nuevo/paciente",
          component: FormularioRegistro,
          name: "Nuevo Paciente",
        },
      ],
    },
    {
      path: "/Login",
      component: ConfiguracionLayout,
      routes: [
        {
          path: "/configuracion/servicios",
          component: ServicioRegistro,
          name: "Registro de Servicios",
        }
      ]
  
    },
  ];