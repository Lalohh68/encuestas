import { getConnection } from "./../database/db";

async function consultarDatosClubes() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id_clubes) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.clubes where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.clubes where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.clubes where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.clubes where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.clubes where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.clubes where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.clubes where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.clubes where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.clubes;`); 
      return await result
  }

export {
    consultarDatosClubes

}