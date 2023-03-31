import { request } from "express";
import * as services from "./../services/adminService";

const consultarDatosClubes = async (req, res) => {
    const datosClubes = await services.consultarDatosClubes();
    res.send(datosClubes)
  }
  const consultarDatosControlEscolar = async (req, res) => {
    const datosControlEscolar = await services.consultarDatosControlEscolar();
    res.send(datosControlEscolar)
  }

  const consultarDatosTutorias = async (req, res) => {
    const datosTutorias = await services.consultarDatosTutorias();
    res.send(datosTutorias)
  }

  const consultarDatosBiblioteca = async (req, res) => {
    const datosBiblioteca = await services.consultarDatosBiblioteca();
    res.send(datosBiblioteca)
  }

  const consultarDatosCentroDeComputo = async (req, res) => {
    const datosCentroDconsultarDatosCentroDeComputo = await services.consultarDatosCentroDeComputo();
    res.status(200).send(datosCentroDconsultarDatosCentroDeComputo)
  }

  const consultarDatosServicioSocial = async (req, res) => {
    const datosCentroDconsultarDatosServicioSocial = await services.consultarDatosServicioSocial();
    res.status(200).send(datosCentroDconsultarDatosServicioSocial)
  }

  export const methods = {
    consultarDatosClubes,
    consultarDatosControlEscolar,
    consultarDatosTutorias,
    consultarDatosBiblioteca,
    consultarDatosCentroDeComputo,
    consultarDatosServicioSocial
  }