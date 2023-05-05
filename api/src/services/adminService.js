import { getConnection } from "./../database/db.js";

async function consultarDatosClubes() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM clubes where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM clubes where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM clubes where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM clubes where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM clubes where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM clubes where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM clubes where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM clubes where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM clubes;`); 
      return await result
  }

  async function consultarDatosControlEscolar() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM control_escolar where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM control_escolar where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM control_escolar where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM control_escolar where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM control_escolar where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM control_escolar where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM control_escolar where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM control_escolar where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM control_escolar;`); 
      return await result
  }

  async function consultarDatosTutorias() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM tutorias where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM tutorias where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM tutorias where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM tutorias where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM tutorias where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM tutorias where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM tutorias where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM tutorias where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM tutorias;`); 
      return await result
  }

  async function consultarDatosBiblioteca() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM biblioteca where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM biblioteca where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM biblioteca where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM biblioteca where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM biblioteca where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM biblioteca where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM biblioteca where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM biblioteca where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM biblioteca;`); 
      return await result
  }

  async function consultarDatosCentroDeComputo() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM centro_computo where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM centro_computo where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM centro_computo where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM centro_computo where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM centro_computo where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM centro_computo where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM centro_computo where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM centro_computo where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM centro_computo;`); 
      return await result
  }

  async function consultarDatosServicioSocial() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM servicio_social where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM servicio_social where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM servicio_social where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM servicio_social where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM servicio_social where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM servicio_social where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM servicio_social where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM servicio_social where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM servicio_social;`); 
      return await result
  }
  async function consultarDatosResidencias() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM residencias where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM residencias where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM residencias where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM residencias where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM residencias where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM residencias where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM residencias where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM residencias where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM residencias;`); 
      return await result
  }
  async function consultarDatosIdiomas() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM idiomas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM idiomas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM idiomas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM idiomas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM idiomas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM idiomas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM idiomas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM idiomas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM idiomas;`); 
      return await result
  }
  async function consultarDatosCafeteria2() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM cafeteria_2 where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM cafeteria_2 where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM cafeteria_2 where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM cafeteria_2 where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM cafeteria_2 where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM cafeteria_2 where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM cafeteria_2 where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM cafeteria_2 where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM cafeteria_2;`); 
      return await result
  }
  async function consultarDatosCafeteria1() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM cafeteria_1 where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM cafeteria_1 where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM cafeteria_1 where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM cafeteria_1 where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM cafeteria_1 where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM cafeteria_1 where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM cafeteria_1 where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM cafeteria_1 where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM cafeteria_1;`); 
      return await result
  }
  async function consultarDatosCajas() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM cajas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM cajas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM cajas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM cajas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM cajas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM cajas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM cajas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM cajas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM cajas;`); 
      return await result
  }
  async function consultarDatosCoordinadorDeCarreras() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM coordinador_carreras where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM coordinador_carreras where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM coordinador_carreras where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM coordinador_carreras where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM coordinador_carreras where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM coordinador_carreras where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM coordinador_carreras where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM coordinador_carreras where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM coordinador_carreras;`); 
      return await result
  }
  async function consultarDatosBecas() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM becas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM becas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM becas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM becas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM becas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM becas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM becas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM becas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM becas;`); 
      return await result
  }
  async function consultarDatosCentroDeCopiado() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM centro_copiado where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM centro_copiado where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM centro_copiado where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM centro_copiado where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM centro_copiado where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM centro_copiado where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM centro_copiado where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM centro_copiado where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM centro_copiado;`); 
      return await result
  }
  async function consultarDatosPsicologico() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM psicologico where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM psicologico where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM psicologico where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM psicologico where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM psicologico where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM psicologico where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM psicologico where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM psicologico where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM psicologico;`); 
      return await result
  }
  async function consultarDatosMedico() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM medico where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM medico where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM medico where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM medico where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM medico where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM medico where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM medico where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM medico where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM medico;`); 
      return await result
  }
  async function consultarDatosAsesoriasAcademicas() {
   
    const result = await getConnection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM asesorias_academicas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM asesorias_academicas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM asesorias_academicas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM asesorias_academicas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM asesorias_academicas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM asesorias_academicas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM asesorias_academicas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM asesorias_academicas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM asesorias_academicas;`); 
      return await result
  }

  async function consultarCarrera() {
   
    const result = await getConnection.query(
        `SELECT * FROM caitecmx_encuesta.carreras where id_carreras=1;`); 
    
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
    consultarDatosAsesoriasAcademicas,
    consultarCarrera
}