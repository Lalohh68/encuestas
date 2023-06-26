import { request } from "express";
import * as services from "./../services/adminService.js";

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
    const consultarDatosCentroDeComputo = await services.consultarDatosCentroDeComputo();
    res.status(200).send(consultarDatosCentroDeComputo)
  }

  const consultarDatosServicioSocial = async (req, res) => {
    const consultarDatosServicioSocial = await services.consultarDatosServicioSocial();
    res.status(200).send(consultarDatosServicioSocial)
  }
  const consultarDatosResidencias = async (req, res) => {
    const consultarDatosResidencias = await services.consultarDatosResidencias();
    res.status(200).send(consultarDatosResidencias)
  }
  const consultarDatosIdiomas = async (req, res) => {
    const consultarDatosIdiomas = await services.consultarDatosIdiomas();
    res.status(200).send(consultarDatosIdiomas)
  }
  const consultarDatosCafeteria1 = async (req, res) => {
    const consultarDatosCafeteria1 = await services.consultarDatosCafeteria1();
    res.status(200).send(consultarDatosCafeteria1)
  }
  const consultarDatosCafeteria2 = async (req, res) => {
    const consultarDatosCafeteria2 = await services.consultarDatosCafeteria2();
    res.status(200).send(consultarDatosCafeteria2)
  }
  const consultarDatosCajas = async (req, res) => {
    const consultarDatosCajas = await services.consultarDatosCajas();
    res.status(200).send(consultarDatosCajas)
  }
  const consultarDatosCoordinadorDeCarreras = async (req, res) => {
    const consultarDatosCoordinadorDeCarreras = await services.consultarDatosCoordinadorDeCarreras();
    res.status(200).send(consultarDatosCoordinadorDeCarreras)
  }
  const consultarDatosBecas = async (req, res) => {
    const consultarDatosBecas = await services.consultarDatosBecas();
    res.status(200).send(consultarDatosBecas)
  }
  const consultarDatosCentroDeCopiado = async (req, res) => {
    const consultarDatosCentroDeCopiado = await services.consultarDatosCentroDeCopiado();
    res.status(200).send(consultarDatosCentroDeCopiado)
  }
  const consultarDatosPsicologico = async (req, res) => {
    const consultarDatosPsicologico = await services.consultarDatosPsicologico();
    res.status(200).send(consultarDatosPsicologico)
  }
  const consultarDatosMedico = async (req, res) => {
    const consultarDatosMedico = await services.consultarDatosMedico();
    res.status(200).send(consultarDatosMedico)
  }
  const consultarDatosAsesoriasAcademicas = async (req, res) => {
    const consultarDatosAsesoriasAcademicas = await services.consultarDatosAsesoriasAcademicas();
    res.status(200).send(consultarDatosAsesoriasAcademicas)
  }
  const consultarAlumnos = async (req, res) => {
    const consultarAlumnos = await services.consultarAlumnos();
    res.json(consultarAlumnos)
   
  }
  const consultarTotalAlumnos = async (req, res) => {
    const consultarTotalAlumnos = await services.consultarTotalAlumnos();
    res.status(200).send(consultarTotalAlumnos)
   
  }

  // comentarios
  const consultarComentariosClubes = async (req, res) => {
    const datosClubes = await services.consultarComentariosClubes();
    res.send(datosClubes)
  }
  const consultarComentariosControlEscolar = async (req, res) => {
    const datosControlEscolar = await services.consultarComentariosControlEscolar();
    res.send(datosControlEscolar)
  }

  const consultarComentariosTutorias = async (req, res) => {
    const datosTutorias = await services.consultarComentariosTutorias();
    res.send(datosTutorias)
  }

  const consultarComentariosBiblioteca = async (req, res) => {
    const datosBiblioteca = await services.consultarComentariosBiblioteca();
    res.send(datosBiblioteca)
  }

  const consultarComentariosCentroDeComputo = async (req, res) => {
    const consultarDatosCentroDeComputo = await services.consultarComentariosCentroDeComputo();
    res.status(200).send(consultarDatosCentroDeComputo)
  }

  const consultarComentariosServicioSocial = async (req, res) => {
    const consultarDatosServicioSocial = await services.consultarComentariosServicioSocial();
    res.status(200).send(consultarDatosServicioSocial)
  }
  const consultarComentariosResidencias = async (req, res) => {
    const consultarDatosResidencias = await services.consultarComentariosResidencias();
    res.status(200).send(consultarDatosResidencias)
  }
  const consultarComentariosIdiomas = async (req, res) => {
    const consultarDatosIdiomas = await services.consultarComentariosIdiomas();
    res.status(200).send(consultarDatosIdiomas)
  }
  const consultarComentariosCafeteria1 = async (req, res) => {
    const consultarDatosCafeteria1 = await services.consultarComentariosCafeteria1();
    res.status(200).send(consultarDatosCafeteria1)
  }
  const consultarComentariosCafeteria2 = async (req, res) => {
    const consultarDatosCafeteria2 = await services.consultarComentariosCafeteria2();
    res.status(200).send(consultarDatosCafeteria2)
  }
  const consultarComentariosCajas = async (req, res) => {
    const consultarDatosCajas = await services.consultarComentariosCajas();
    res.status(200).send(consultarDatosCajas)
  }
  const consultarComentariosCoordinadorDeCarreras = async (req, res) => {
    const consultarDatosCoordinadorDeCarreras = await services.consultarComentariosCoordinadorDeCarreras();
    res.status(200).send(consultarDatosCoordinadorDeCarreras)
  }
  const consultarComentariosBecas = async (req, res) => {
    const consultarDatosBecas = await services.consultarComentariosBecas();
    res.status(200).send(consultarDatosBecas)
  }
  const consultarComentariosCentroDeCopiado = async (req, res) => {
    const consultarDatosCentroDeCopiado = await services.consultarComentariosCentroDeCopiado();
    res.status(200).send(consultarDatosCentroDeCopiado)
  }
  const consultarComentariosPsicologico = async (req, res) => {
    const consultarDatosPsicologico = await services.consultarComentariosPsicologico();
    res.status(200).send(consultarDatosPsicologico)
  }
  const consultarComentariosMedico = async (req, res) => {
    const consultarDatosMedico = await services.consultarComentariosMedico();
    res.status(200).send(consultarDatosMedico)
  }
  const consultarComentariosAsesoriasAcademicas = async (req, res) => {
    const consultarDatosAsesoriasAcademicas = await services.consultarComentariosAsesoriasAcademicas();
    res.status(200).send(consultarDatosAsesoriasAcademicas)
  }

  export const methods = {
    consultarDatosClubes,
    consultarDatosControlEscolar,
    consultarDatosTutorias,
    consultarDatosBiblioteca,
    consultarDatosCentroDeComputo,
    consultarDatosServicioSocial,
    consultarDatosResidencias,
    consultarDatosIdiomas,
    consultarDatosCafeteria1,
    consultarDatosCafeteria2,
    consultarDatosCajas,
    consultarDatosCoordinadorDeCarreras,
    consultarDatosBecas,
    consultarDatosCentroDeCopiado,
    consultarDatosPsicologico,
    consultarDatosMedico,
    consultarDatosAsesoriasAcademicas,
    consultarAlumnos,
    consultarTotalAlumnos,
    consultarComentariosClubes,
    consultarComentariosControlEscolar,
    consultarComentariosTutorias,
    consultarComentariosBiblioteca,
    consultarComentariosCentroDeComputo,
    consultarComentariosServicioSocial,
    consultarComentariosResidencias,
    consultarComentariosIdiomas,
    consultarComentariosCafeteria1,
    consultarComentariosCafeteria2,
    consultarComentariosCajas,
    consultarComentariosCoordinadorDeCarreras,
    consultarComentariosBecas,
    consultarComentariosCentroDeCopiado,
    consultarComentariosPsicologico,
    consultarComentariosMedico,
    consultarComentariosAsesoriasAcademicas
  }