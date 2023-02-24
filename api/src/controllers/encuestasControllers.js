import { request } from "express";
import * as services from "./../services/encuestasServices";


const consultarFolio = async (req, res) => {
  try {
     const numControl = req.body.numControl;
    const carrera = req.body.carrera;
  if (numControl == undefined || carrera == undefined || numControl == "" || carrera == "") {
    res.status(400);
    res.json("datos incompletos");
    return;
  }
if (numControl != null && carrera != null && numControl != "" && carrera != "") {
  const folio = await services.consultarFolio(String(numControl));
  res.send(folio)
}
  } catch (error) {
    
  }
 
}
const registrarAlumno = async (req, res) => {
    const numControl = req.body.numControl;
    const carrera = req.body.carrera;

    if (numControl == undefined || carrera == undefined || numControl == "" || carrera == "") {
      res.status(400);
      res.json("datos incompletos");
      return;
    }
    if (numControl != null && carrera != null && numControl != "" && carrera != "") {
     
        try {
          const id =await services.registrarAlumno(String(numControl),String(carrera));
          res.json(id)
        } catch (error) {
          res.status(500);
  res.send(error.message);
        }
      
      

    }
    return
  
}
const comprobarAlumno = async (req, res) => {
  try {
    const numControl = req.body.numControl;
    const carrera = req.body.carrera;

    if (numControl == undefined || carrera == undefined || numControl == "" || carrera == "") {
      res.status(400);
      res.json("datos incompletos");
      return;
    }
    if (numControl != null && carrera != null && numControl != "" && carrera != "") {
      try {
        const idAlumno = await services.consultarId(String(numControl));
        if (idAlumno.length===0) {
          try {
            const id =await services.registrarAlumno(String(numControl),String(carrera));
            res.json(id)
          } catch (error) {
            res.status(500);
    res.send(error.message);
          }
          
        } else {
          try {
            const folio = await services.consultarFolio(String(numControl));
            if (folio.length ===0) {
              res.json("encuestas no realizadas")
            } else {
              res.send(folio)
            }
          } catch (error) {
            res.status(500);
    res.send(error.message);
          }
        }
      } catch (error) {
        res.status(500);
    res.send(error.message);
      }
      

    }
    return
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio becas
const CrearEncuestaBecas = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaBecas(
        idAlumno, horario, disponibilidad, atencion, amabilidad, comentarios);
      res.status(201);
      res.json("datos registrados");
    }else {

      const mensajes = [];

      if (!req.body || !req.body.idAlumno){
          mensajes.push("IdAlumno es un campo obligatorio");
      }  
     
      if (!req.body || !req.body.horario){
          mensajes.push("horario externo es un campo obligatorio");
      }   

      if (!req.body || !req.body.disponibilidad){
           mensajes.push("disponibilidad es un campo obligatorio");    
      }        

      if (!req.body || !req.body.atencion){
          mensajes.push("atencion es un campo obligatorio");    
     }   
     
     if (!req.body || !req.body.amabilidad){
      mensajes.push("amabilidad es un campo obligatorio");    
 }   

     
      res.status(400).send(mensajes);
  }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio Asesorias
const CrearEncuestaAsesorias = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioAsesorias = req.body.horarioAsesorias;
    const disponibilidadAsesorias = req.body.disponibilidadAsesorias;
    const atencionAsesorias = req.body.atencionAsesorias;
    const amabilidadAsesorias = req.body.amabilidadAsesorias;
    const comentariosAsesorias = req.body.comentariosAsesorias;

    if (idAlumno == undefined || horarioAsesorias == undefined || disponibilidadAsesorias == undefined || atencionAsesorias == undefined || amabilidadAsesorias == undefined || comentariosAsesorias == undefined, idAlumno == "" || horarioAsesorias == "" || disponibilidadAsesorias == "" || atencionAsesorias == "" || amabilidadAsesorias == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioAsesorias != undefined && disponibilidadAsesorias != undefined && atencionAsesorias != undefined && amabilidadAsesorias != undefined && comentariosAsesorias != undefined && idAlumno != "" && horarioAsesorias != "" && disponibilidadAsesorias != "" && atencionAsesorias != "" && amabilidadAsesorias != "") {
      await services.createEncuestaAsesoriasAcademicas(
        idAlumnoAsesorias, horarioAsesorias, disponibilidadAsesorias, atencionAsesorias, amabilidadAsesorias, comentariosAsesorias);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


// sevicio Biblioteca
const CrearEncuestaBiblioteca = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioBiblioteca = req.body.horarioBiblioteca;
    const disponibilidadBiblioteca = req.body.disponibilidadBiblioteca;
    const atencionBiblioteca = req.body.atencionBiblioteca;
    const amabilidadBiblioteca = req.body.amabilidadBiblioteca;
    const comentariosBiblioteca = req.body.comentariosBiblioteca;

    if (idAlumno == undefined || horarioBiblioteca == undefined || disponibilidadBiblioteca == undefined || atencionBiblioteca == undefined || amabilidadBiblioteca == undefined || comentariosBiblioteca == undefined, idAlumno == "" || horarioBiblioteca == "" || disponibilidadBiblioteca == "" || atencionBiblioteca == "" || amabilidadBiblioteca == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioBiblioteca != undefined && disponibilidadBiblioteca != undefined && atencionBiblioteca != undefined && amabilidadBiblioteca != undefined && comentariosBiblioteca != undefined && idAlumno != "" && horarioBiblioteca != "" && disponibilidadBiblioteca != "" && atencionBiblioteca != "" && amabilidadBiblioteca != "") {
      await services.createEncuestaBiblioteca(
        idAlumnoBiblioteca, horarioBiblioteca, disponibilidadBiblioteca, atencionBiblioteca, amabilidadBiblioteca, comentariosBiblioteca);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio Cafeteria1
const CrearEncuestaCafeteria1 = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioCafeteria1 = req.body.horarioCafeteria1;
    const disponibilidadCafeteria1 = req.body.disponibilidadCafeteria1;
    const atencionCafeteria1 = req.body.atencionCafeteria1;
    const amabilidadCafeteria1 = req.body.amabilidadCafeteria1;
    const comentariosCafeteria1 = req.body.comentariosCafeteria1;

    if (idAlumno == undefined || horarioCafeteria1 == undefined || disponibilidadCafeteria1 == undefined || atencionCafeteria1 == undefined || amabilidadCafeteria1 == undefined || comentariosCafeteria1 == undefined, idAlumno == "" || horarioCafeteria1 == "" || disponibilidadCafeteria1 == "" || atencionCafeteria1 == "" || amabilidadCafeteria1 == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioCafeteria1 != undefined && disponibilidadCafeteria1 != undefined && atencionCafeteria1 != undefined && amabilidadCafeteria1 != undefined && comentariosCafeteria1 != undefined && idAlumno != "" && horarioCafeteria1 != "" && disponibilidadCafeteria1 != "" && atencionCafeteria1 != "" && amabilidadCafeteria1 != "") {
      await services.createEncuestaCafeteria1(
        idAlumnoCafeteria1, horarioCafeteria1, disponibilidadCafeteria1, atencionCafeteria1, amabilidadCafeteria1, comentariosCafeteria1);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio Cafeteria2
const CrearEncuestaCafeteria2 = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioCafeteria2 = req.body.horarioCafeteria2;
    const disponibilidadCafeteria2 = req.body.disponibilidadCafeteria2;
    const atencionCafeteria2 = req.body.atencionCafeteria2;
    const amabilidadCafeteria2 = req.body.amabilidadCafeteria2;
    const comentariosCafeteria2 = req.body.comentariosCafeteria2;

    if (idAlumno == undefined || horarioCafeteria2 == undefined || disponibilidadCafeteria2 == undefined || atencionCafeteria2 == undefined || amabilidadCafeteria2 == undefined || comentariosCafeteria2 == undefined, idAlumno == "" || horarioCafeteria2 == "" || disponibilidadCafeteria2 == "" || atencionCafeteria2 == "" || amabilidadCafeteria2 == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioCafeteria2 != undefined && disponibilidadCafeteria2 != undefined && atencionCafeteria2 != undefined && amabilidadCafeteria2 != undefined && comentariosCafeteria2 != undefined && idAlumno != "" && horarioCafeteria2 != "" && disponibilidadCafeteria2 != "" && atencionCafeteria2 != "" && amabilidadCafeteria2 != "") {
      await services.createEncuestaCafeteria2(
        idAlumnoCafeteria2, horarioCafeteria2, disponibilidadCafeteria2, atencionCafeteria2, amabilidadCafeteria2, comentariosCafeteria2);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio Cajas
const CrearEncuestaCajas = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioCajas = req.body.horarioCajas;
    const disponibilidadCajas = req.body.disponibilidadCajas;
    const atencionCajas = req.body.atencionCajas;
    const amabilidadCajas = req.body.amabilidadCajas;
    const comentariosCajas = req.body.comentariosCajas;

    if (idAlumno == undefined || horarioCajas == undefined || disponibilidadCajas == undefined || atencionCajas == undefined || amabilidadCajas == undefined || comentariosCajas == undefined, idAlumno == "" || horarioCajas == "" || disponibilidadCajas == "" || atencionCajas == "" || amabilidadCajas == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioCajas != undefined && disponibilidadCajas != undefined && atencionCajas != undefined && amabilidadCajas != undefined && comentariosCajas != undefined && idAlumno != "" && horarioCajas != "" && disponibilidadCajas != "" && atencionCajas != "" && amabilidadCajas != "") {
      await services.createEncuestaCajas(
        idAlumnoCajas, horarioCajas, disponibilidadCajas, atencionCajas, amabilidadCajas, comentariosCajas);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio CentroComputo
const CrearEncuestaCentroComputo = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioCentroComputo = req.body.horarioCentroComputo;
    const disponibilidadCentroComputo = req.body.disponibilidadCentroComputo;
    const atencionCentroComputo = req.body.atencionCentroComputo;
    const amabilidadCentroComputo = req.body.amabilidadCentroComputo;
    const comentariosCentroComputo = req.body.comentariosCentroComputo;

    if (idAlumno == undefined || horarioCentroComputo == undefined || disponibilidadCentroComputo == undefined || atencionCentroComputo == undefined || amabilidadCentroComputo == undefined || comentariosCentroComputo == undefined, idAlumno == "" || horarioCentroComputo == "" || disponibilidadCentroComputo == "" || atencionCentroComputo == "" || amabilidadCentroComputo == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioCentroComputo != undefined && disponibilidadCentroComputo != undefined && atencionCentroComputo != undefined && amabilidadCentroComputo != undefined && comentariosCentroComputo != undefined && idAlumno != "" && horarioCentroComputo != "" && disponibilidadCentroComputo != "" && atencionCentroComputo != "" && amabilidadCentroComputo != "") {
      await services.createEncuestaCentroComputo(
        idAlumnoCentroComputo, horarioCentroComputo, disponibilidadCentroComputo, atencionCentroComputo, amabilidadCentroComputo, comentariosCentroComputo);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio CentroCopiado
const CrearEncuestaCentroCopiado = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioCentroCopiado = req.body.horarioCentroCopiado;
    const disponibilidadCentroCopiado = req.body.disponibilidadCentroCopiado;
    const atencionCentroCopiado = req.body.atencionCentroCopiado;
    const amabilidadCentroCopiado = req.body.amabilidadCentroCopiado;
    const comentariosCentroCopiado = req.body.comentariosCentroCopiado;

    if (idAlumno == undefined || horarioCentroCopiado == undefined || disponibilidadCentroCopiado == undefined || atencionCentroCopiado == undefined || amabilidadCentroCopiado == undefined || comentariosCentroCopiado == undefined, idAlumno == "" || horarioCentroCopiado == "" || disponibilidadCentroCopiado == "" || atencionCentroCopiado == "" || amabilidadCentroCopiado == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioCentroCopiado != undefined && disponibilidadCentroCopiado != undefined && atencionCentroCopiado != undefined && amabilidadCentroCopiado != undefined && comentariosCentroCopiado != undefined && idAlumno != "" && horarioCentroCopiado != "" && disponibilidadCentroCopiado != "" && atencionCentroCopiado != "" && amabilidadCentroCopiado != "") {
      await services.createEncuestaCentroCopiado(
        idAlumnoCentroCopiado, horarioCentroCopiado, disponibilidadCentroCopiado, atencionCentroCopiado, amabilidadCentroCopiado, comentariosCentroCopiado);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio Clubes
const CrearEncuestaClubes = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioClubes = req.body.horarioClubes;
    const disponibilidadClubes = req.body.disponibilidadClubes;
    const atencionClubes = req.body.atencionClubes;
    const amabilidadClubes = req.body.amabilidadClubes;
    const comentariosClubes = req.body.comentariosClubes;

    if (idAlumno == undefined || horarioClubes == undefined || disponibilidadClubes == undefined || atencionClubes == undefined || amabilidadClubes == undefined || comentariosClubes == undefined, idAlumno == "" || horarioClubes == "" || disponibilidadClubes == "" || atencionClubes == "" || amabilidadClubes == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioClubes != undefined && disponibilidadClubes != undefined && atencionClubes != undefined && amabilidadClubes != undefined && comentariosClubes != undefined && idAlumno != "" && horarioClubes != "" && disponibilidadClubes != "" && atencionClubes != "" && amabilidadClubes != "") {
      await services.createEncuestaClubes(
        idAlumnoClubes, horarioClubes, disponibilidadClubes, atencionClubes, amabilidadClubes, comentariosClubes);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio ControlEscolar
const CrearEncuestaControlEscolar = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioControlEscolar = req.body.horarioControlEscolar;
    const disponibilidadControlEscolar = req.body.disponibilidadControlEscolar;
    const atencionControlEscolar = req.body.atencionControlEscolar;
    const amabilidadControlEscolar = req.body.amabilidadControlEscolar;
    const comentariosControlEscolar = req.body.comentariosControlEscolar;

    if (idAlumno == undefined || horarioControlEscolar == undefined || disponibilidadControlEscolar == undefined || atencionControlEscolar == undefined || amabilidadControlEscolar == undefined || comentariosControlEscolar == undefined, idAlumno == "" || horarioControlEscolar == "" || disponibilidadControlEscolar == "" || atencionControlEscolar == "" || amabilidadControlEscolar == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioControlEscolar != undefined && disponibilidadControlEscolar != undefined && atencionControlEscolar != undefined && amabilidadControlEscolar != undefined && comentariosControlEscolar != undefined && idAlumno != "" && horarioControlEscolar != "" && disponibilidadControlEscolar != "" && atencionControlEscolar != "" && amabilidadControlEscolar != "") {
      await services.createEncuestacontrolEscolar(
        idAlumnoControlEscolar, horarioControlEscolar, disponibilidadControlEscolar, atencionControlEscolar, amabilidadControlEscolar, comentariosControlEscolar);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


// sevicio Cafeteria2
const CrearEncuestaCoordinadorCarreras = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioCoordinadorCarreras = req.body.horarioCoordinadorCarreras;
    const disponibilidadCoordinadorCarreras = req.body.disponibilidadCoordinadorCarreras;
    const atencionCoordinadorCarreras = req.body.atencionCoordinadorCarreras;
    const amabilidadCoordinadorCarreras = req.body.amabilidadCoordinadorCarreras;
    const comentariosCoordinadorCarreras = req.body.comentariosCoordinadorCarreras;

    if (idAlumno == undefined || horarioCoordinadorCarreras == undefined || disponibilidadCoordinadorCarreras == undefined || atencionCoordinadorCarreras == undefined || amabilidadCoordinadorCarreras == undefined || comentariosCoordinadorCarreras == undefined, idAlumno == "" || horarioCoordinadorCarreras == "" || disponibilidadCoordinadorCarreras == "" || atencionCoordinadorCarreras == "" || amabilidadCoordinadorCarreras == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioCoordinadorCarreras != undefined && disponibilidadCoordinadorCarreras != undefined && atencionCoordinadorCarreras != undefined && amabilidadCoordinadorCarreras != undefined && comentariosCoordinadorCarreras != undefined && idAlumno != "" && horarioCoordinadorCarreras != "" && disponibilidadCoordinadorCarreras != "" && atencionCoordinadorCarreras != "" && amabilidadCoordinadorCarreras != "") {
      await services.createEncuestaCoordinadorCarreras(
        idAlumnoCoordinadorCarreras, horarioCoordinadorCarreras, disponibilidadCoordinadorCarreras, atencionCoordinadorCarreras, amabilidadCoordinadorCarreras, comentariosCoordinadorCarreras);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio Idiomas
const CrearEncuestaIdiomas = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioIdiomas = req.body.horarioIdiomas;
    const disponibilidadIdiomas = req.body.disponibilidadIdiomas;
    const atencionIdiomas = req.body.atencionIdiomas;
    const amabilidadIdiomas = req.body.amabilidadIdiomas;
    const comentariosIdiomas = req.body.comentariosIdiomas;

    if (idAlumno == undefined || horarioIdiomas == undefined || disponibilidadIdiomas == undefined || atencionIdiomas == undefined || amabilidadIdiomas == undefined || comentariosIdiomas == undefined, idAlumno == "" || horarioIdiomas == "" || disponibilidadIdiomas == "" || atencionIdiomas == "" || amabilidadIdiomas == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioIdiomas != undefined && disponibilidadIdiomas != undefined && atencionIdiomas != undefined && amabilidadIdiomas != undefined && comentariosIdiomas != undefined && idAlumno != "" && horarioIdiomas != "" && disponibilidadIdiomas != "" && atencionIdiomas != "" && amabilidadIdiomas != "") {
      await services.createEncuestaIdiomas(
        idAlumnoIdiomas, horarioIdiomas, disponibilidadIdiomas, atencionIdiomas, amabilidadIdiomas, comentariosIdiomas);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
// sevicio Medico
const CrearEncuestaMedico = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioMedico = req.body.horarioMedico;
    const disponibilidadMedico = req.body.disponibilidadMedico;
    const atencionMedico = req.body.atencionMedico;
    const amabilidadMedico = req.body.amabilidadMedico;
    const comentariosMedico = req.body.comentariosMedico;

    if (idAlumno == undefined || horarioMedico == undefined || disponibilidadMedico == undefined || atencionMedico == undefined || amabilidadMedico == undefined || comentariosMedico == undefined, idAlumno == "" || horarioMedico == "" || disponibilidadMedico == "" || atencionMedico == "" || amabilidadMedico == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioMedico != undefined && disponibilidadMedico != undefined && atencionMedico != undefined && amabilidadMedico != undefined && comentariosMedico != undefined && idAlumno != "" && horarioMedico != "" && disponibilidadMedico != "" && atencionMedico != "" && amabilidadMedico != "") {
      await services.createEncuestaMedico(
        idAlumnoMedico, horarioMedico, disponibilidadMedico, atencionMedico, amabilidadMedico, comentariosMedico);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


// sevicio Psicologico
const CrearEncuestaPsicologico = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioPsicologico = req.body.horarioPsicologico;
    const disponibilidadPsicologico = req.body.disponibilidadPsicologico;
    const atencionPsicologico = req.body.atencionPsicologico;
    const amabilidadPsicologico = req.body.amabilidadPsicologico;
    const comentariosPsicologico = req.body.comentariosPsicologico;

    if (idAlumno == undefined || horarioPsicologico == undefined || disponibilidadPsicologico == undefined || atencionPsicologico == undefined || amabilidadPsicologico == undefined || comentariosPsicologico == undefined, idAlumno == "" || horarioPsicologico == "" || disponibilidadPsicologico == "" || atencionPsicologico == "" || amabilidadPsicologico == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioPsicologico != undefined && disponibilidadPsicologico != undefined && atencionPsicologico != undefined && amabilidadPsicologico != undefined && comentariosPsicologico != undefined && idAlumno != "" && horarioPsicologico != "" && disponibilidadPsicologico != "" && atencionPsicologico != "" && amabilidadPsicologico != "") {
      await services.createEncuestaPsicologico(
        idAlumnoPsicologico, horarioPsicologico, disponibilidadPsicologico, atencionPsicologico, amabilidadPsicologico, comentariosPsicologico);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio Residencias
const CrearEncuestaResidencias = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioResidencias = req.body.horarioResidencias;
    const disponibilidadResidencias = req.body.disponibilidadResidencias;
    const atencionResidencias = req.body.atencionResidencias;
    const amabilidadResidencias = req.body.amabilidadResidencias;
    const comentariosResidencias = req.body.comentariosResidencias;

    if (idAlumno == undefined || horarioResidencias == undefined || disponibilidadResidencias == undefined || atencionResidencias == undefined || amabilidadResidencias == undefined || comentariosResidencias == undefined, idAlumno == "" || horarioResidencias == "" || disponibilidadResidencias == "" || atencionResidencias == "" || amabilidadResidencias == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioResidencias != undefined && disponibilidadResidencias != undefined && atencionResidencias != undefined && amabilidadResidencias != undefined && comentariosResidencias != undefined && idAlumno != "" && horarioResidencias != "" && disponibilidadResidencias != "" && atencionResidencias != "" && amabilidadResidencias != "") {
      await services.createEncuestaResidencias(
        idAlumnoResidencias, horarioResidencias, disponibilidadResidencias, atencionResidencias, amabilidadResidencias, comentariosResidencias);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio ServicioSocial
const CrearEncuestaServicioSocial = async (req, res) => {
  try {
    const idAlumno = req.body.idAlumno;
    const horarioServicioSocial = req.body.horarioServicioSocial;
    const disponibilidadServicioSocial = req.body.disponibilidadServicioSocial;
    const atencionServicioSocial = req.body.atencionServicioSocial;
    const amabilidadServicioSocial = req.body.amabilidadServicioSocial;
    const comentariosServicioSocial = req.body.comentariosServicioSocial;

    if (idAlumno == undefined || horarioServicioSocial == undefined || disponibilidadServicioSocial == undefined || atencionServicioSocial == undefined || amabilidadServicioSocial == undefined || comentariosServicioSocial == undefined, idAlumno == "" || horarioServicioSocial == "" || disponibilidadServicioSocial == "" || atencionServicioSocial == "" || amabilidadServicioSocial == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioServicioSocial != undefined && disponibilidadServicioSocial != undefined && atencionServicioSocial != undefined && amabilidadServicioSocial != undefined && comentariosServicioSocial != undefined && idAlumno != "" && horarioServicioSocial != "" && disponibilidadServicioSocial != "" && atencionServicioSocial != "" && amabilidadServicioSocial != "") {
      await services.createEncuestaServicioSocial(
        idAlumnoServicioSocial, horarioServicioSocial, disponibilidadServicioSocial, atencionServicioSocial, amabilidadServicioSocial, comentariosServicioSocial);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// sevicio Tutorias
const CrearEncuestaTutorias = async (req, res) => {
  try {ServicioSocial
    const idAlumno = req.body.idAlumno;
    const horarioTutorias = req.body.horarioTutorias;
    const disponibilidadTutorias = req.body.disponibilidadTutorias;
    const atencionTutorias = req.body.atencionTutorias;
    const amabilidadTutorias = req.body.amabilidadTutorias;
    const comentariosTutorias = req.body.comentariosTutorias;

    if (idAlumno == undefined || horarioTutorias == undefined || disponibilidadTutorias == undefined || atencionTutorias == undefined || amabilidadTutorias == undefined || comentariosTutorias == undefined, idAlumno == "" || horarioTutorias == "" || disponibilidadTutorias == "" || atencionTutorias == "" || amabilidadTutorias == "") {
      res.status(400);
      res.json("Datos incompletos!");
    }
    if (idAlumno != undefined && horarioTutorias != undefined && disponibilidadTutorias != undefined && atencionTutorias != undefined && amabilidadTutorias != undefined && comentariosTutorias != undefined && idAlumno != "" && horarioTutorias != "" && disponibilidadTutorias != "" && atencionTutorias != "" && amabilidadTutorias != "") {
      await services.createEncuestaTutorias(
        idAlumnoTutorias, horarioTutorias, disponibilidadTutorias, atencionTutorias, amabilidadTutorias, comentariosTutorias);
      res.status(201);
      res.json("datos registrados");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  CrearEncuestaBecas,
  registrarAlumno,
  CrearEncuestaAsesorias,
  CrearEncuestaBiblioteca,
CrearEncuestaCafeteria1,
CrearEncuestaCafeteria2,
CrearEncuestaCajas,
CrearEncuestaCentroComputo,
CrearEncuestaCentroCopiado,
CrearEncuestaClubes,
CrearEncuestaControlEscolar,
CrearEncuestaCoordinadorCarreras,
CrearEncuestaIdiomas,
CrearEncuestaMedico,
CrearEncuestaPsicologico,
CrearEncuestaResidencias,
CrearEncuestaServicioSocial,
CrearEncuestaTutorias,consultarFolio
};
