import { getConnection } from "./../database/db";

async function consultarDatosClubes() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id_clubes) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.clubes where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.clubes where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.clubes where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.clubes where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.clubes where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.clubes where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.clubes where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.clubes where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.clubes;`); 
      return await result
  }

  async function consultarDatosControlEscolar() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.control_escolar where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.control_escolar where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.control_escolar where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.control_escolar where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.control_escolar where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.control_escolar where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.control_escolar where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.control_escolar where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.control_escolar;`); 
      return await result
  }

  async function consultarDatosTutorias() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.tutorias where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.tutorias where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.tutorias where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.tutorias where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.tutorias where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.tutorias where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.tutorias where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.tutorias where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.tutorias;`); 
      return await result
  }

  async function consultarDatosBiblioteca() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.biblioteca where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.biblioteca where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.biblioteca where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.biblioteca where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.biblioteca where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.biblioteca where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.biblioteca where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.biblioteca where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.biblioteca;`); 
      return await result
  }

  async function consultarDatosCentroDeComputo() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.centro_computo where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.centro_computo where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.centro_computo where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.centro_computo where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.centro_computo where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.centro_computo where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.centro_computo where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.centro_computo where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.centro_computo;`); 
      return await result
  }

  async function consultarDatosServicioSocial() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.servicio_social where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.servicio_social where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.servicio_social where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.servicio_social where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.servicio_social where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.servicio_social where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.servicio_social where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.servicio_social where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.servicio_social;`); 
      return await result
  }
  async function consultarDatosResidencias() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.residencias where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.residencias where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.residencias where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.residencias where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.residencias where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.residencias where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.residencias where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.residencias where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.residencias;`); 
      return await result
  }
  async function consultarDatosIdiomas() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.idiomas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.idiomas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.idiomas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.idiomas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.idiomas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.idiomas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.idiomas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.idiomas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.idiomas;`); 
      return await result
  }
  async function consultarDatosCafeteria2() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.cafeteria_2 where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.cafeteria_2 where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.cafeteria_2 where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.cafeteria_2 where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.cafeteria_2 where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.cafeteria_2 where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.cafeteria_2 where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.cafeteria_2 where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.cafeteria_2;`); 
      return await result
  }
  async function consultarDatosCafeteria1() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.cafeteria_1 where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.cafeteria_1 where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.cafeteria_1 where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.cafeteria_1 where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.cafeteria_1 where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.cafeteria_1 where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.cafeteria_1 where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.cafeteria_1 where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.cafeteria_1;`); 
      return await result
  }
  async function consultarDatosCajas() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.cajas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.cajas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.cajas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.cajas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.cajas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.cajas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.cajas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.cajas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.cajas;`); 
      return await result
  }
  async function consultarDatosCoordinadorDeCarreras() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.coordinador_carreras where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.coordinador_carreras where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.coordinador_carreras where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.coordinador_carreras where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.coordinador_carreras where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.coordinador_carreras where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.coordinador_carreras where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.coordinador_carreras where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.coordinador_carreras;`); 
      return await result
  }
  async function consultarDatosBecas() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.becas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.becas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.becas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.becas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.becas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.becas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.becas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.becas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.becas;`); 
      return await result
  }
  async function consultarDatosCentroDeCopiado() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.centro_copiado where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.centro_copiado where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.centro_copiado where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.centro_copiado where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.centro_copiado where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.centro_copiado where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.centro_copiado where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.centro_copiado where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.centro_copiado;`); 
      return await result
  }
  async function consultarDatosPsicologico() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.psicologico where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.psicologico where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.psicologico where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.psicologico where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.psicologico where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.psicologico where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.psicologico where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.psicologico where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.psicologico;`); 
      return await result
  }
  async function consultarDatosMedico() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.medico where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.medico where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.medico where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.medico where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.medico where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.medico where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.medico where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.medico where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.medico;`); 
      return await result
  }
  async function consultarDatosAsesoriasAcademicas() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM caitecmx_encuesta.asesorias_academicas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM caitecmx_encuesta.asesorias_academicas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.asesorias_academicas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM caitecmx_encuesta.asesorias_academicas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.asesorias_academicas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM caitecmx_encuesta.asesorias_academicas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.asesorias_academicas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM caitecmx_encuesta.asesorias_academicas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM caitecmx_encuesta.asesorias_academicas;`); 
      return await result
  }

export {
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
    consultarDatosAsesoriasAcademicas
}