const ROUTES = {
  DASHBOARD: {
    BASE: "/dashboard",
    get FCHILD() {
      return `${this.BASE}/fchild`;
    },
    get SCHILD() {
      return;
    },
  },
};

export default ROUTES;
