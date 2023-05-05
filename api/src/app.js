import express from "express";
import morgan from "morgan";
import config from "./config.js";
import encuestasRoutes from "./routes/encuestasRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import ticsRoutes from "./routes/tics.routes.js";
import sistemasRoutes from "./routes/sistemas.routes.js"
import industrialRoutes from "./routes/industrial.routes.js";
import mecatronicaRoutes from "./routes/mecatronica.routes.js";
import bioquimicaRoutes  from "./routes/bioqumica.routes.js";
import gestionRoutes from "./routes/gestion.routes.js";
import nanoRoutes from "./routes/nano.routes.js";
import cors from "cors"
import cron from "node-cron"
import { consultarCarrera } from "./services/adminService.js";

const port = config.port

cron.schedule("0 0 * * * *", () => {
    consultarCarrera()
})

cron.schedule("6 0 * * * *", () => {
    consultarCarrera()
}) 
cron.schedule("12 0 * * * *", () => {
    consultarCarrera()
})
cron.schedule("18 0 * * * *", () => {
    consultarCarrera()
})
const app=express();
app.use(cors())
//configuraciones
app.set("port", port);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/encuestas",encuestasRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/tics",ticsRoutes);
app.use("/api/sistemas",sistemasRoutes);
app.use("/api/industrial",industrialRoutes);
app.use("/api/mecatronica",mecatronicaRoutes);
app.use("/api/bioquimica",bioquimicaRoutes);
app.use("/api/gestion",gestionRoutes);
app.use("/api/nano",nanoRoutes);


export default app;