import { request } from "express";
import * as services from "./../services/adminService";

const consultarDatosClubes = async (req, res) => {
    const datosClubes = await services.consultarDatosClubes();
    res.send(datosClubes)
  }

  export const methods = {
    consultarDatosClubes
  }