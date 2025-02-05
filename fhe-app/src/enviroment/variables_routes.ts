// Objeto para almacenar las variables de las rutas de acceso

const ROUTES = {
  /*Ruta de login */
  LOGIN: {
    BASE: "/",
  },
  /*Ruta padre dashboard*/
  DASHBOARD: {
    /*La ruta base del padre es /dashboard y a partir de ahi se generan las demas rutas  */
    BASE2: "/dashboard",
    get FCHILD() {
      /*Esta es la ruta que se usara para mostrar los modulos dependiendo el usuario en login */
      return `${this.BASE2}/modules`;
    },
  },
  /*Ruta segundo padre para listar los modulos */
  MODULES: {
    BASE3: "/dashboard/modules",
    get MFCHILD() {
      return `${this.BASE3}/emisor`;
    },
    get MSCHILD() {
      return `${this.BASE3}/signos`;
    },
    get MTCHILD() {
      return `${this.BASE3}/consultorio`;
    },
    get M4CHILD() {
      return `${this.BASE3}/records`;
    },
    get M5CHILD() {
      return `${this.BASE3}/example`;
    },
  },
  /*Ruta para las paginas de administracion del rol "admin" */
  ADMIN: {
    BASE4: "/dashboard/admin",
    get ADMINPAGEMPLOYEE() {
      return `${this.BASE4}/conf-Employees`;
    },
    get ADMINPAGEOFFICE() {
      return `${this.BASE4}/conf-Office`;
    },
    get ADMINPAGESPECIALTIES() {
      return `${this.BASE4}/conf-Specialties`;
    },
  },

  /*Ruta tercer padre para mostrar la pagina cuando no hay una ruta*/
  NOTFOUND: {
    LASTBASE: "*",
  },
};

export default ROUTES;
