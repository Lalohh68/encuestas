import { request } from "express";
import * as services from "./../services/encuestasServices.js";


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
  res.send(folio[0])
}
  } catch (error) {
    console.log(error)
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
          res.json(id.insertId)
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
            let id =await services.registrarAlumno(String(numControl),String(carrera));
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

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaAsesoriasAcademicas(
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


// sevicio Biblioteca
const CrearEncuestaBiblioteca = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaBiblioteca(
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

// sevicio Cafeteria1
const CrearEncuestaCafeteria1 = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaCafeteria1(
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

// sevicio Cafeteria2
const CrearEncuestaCafeteria2 = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaCafeteria2(
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

// sevicio Cajas
const CrearEncuestaCajas = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaCajas(
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

// sevicio CentroComputo
const CrearEncuestaCentroComputo = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaCentroComputo(
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

// sevicio CentroCopiado
const CrearEncuestaCentroCopiado = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaCentroCopiado(
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

// sevicio Clubes
const CrearEncuestaClubes = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaClubes(
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

// sevicio ControlEscolar
const CrearEncuestaControlEscolar = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaControlEscolar(
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


// sevicio Cafeteria2
const CrearEncuestaCoordinadorCarreras = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaCoordinadorCarreras(
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

// sevicio Idiomas
const CrearEncuestaIdiomas = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaIdiomas(
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
// sevicio Medico
const CrearEncuestaMedico = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaMedico(
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


// sevicio Psicologico
const CrearEncuestaPsicologico = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaPsicologico(
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

// sevicio Residencias
const CrearEncuestaResidencias = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaResidencias(
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

// sevicio ServicioSocial
const CrearEncuestaServicioSocial = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaServicioSocial(
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

// sevicio Tutorias
const CrearEncuestaTutorias = async (req, res) => {
  try {

    if (req.body.idAlumno && req.body.horario && req.body.disponibilidad && req.body.atencion && req.body.amabilidad) {
      const idAlumno = req.body.idAlumno;
      const horario = req.body.horario;
      const disponibilidad = req.body.disponibilidad;
      const atencion = req.body.atencion;
      const amabilidad = req.body.amabilidad;
      const comentarios = req.body.comentarios;
      await services.createEncuestaTutorias(
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
