import express from "express";
import morgan from "morgan";
import config from "./config";
import encuestasRoutes from "./routes/encuestasRoutes";
import adminRoutes from "./routes/adminRoutes";
import ticsRoutes from "./routes/tics.routes";
import sistemasRoutes from "./routes/sistemas.routes"
import industrialRoutes from "./routes/industrial.routes";
import mecatronicaRoutes from "./routes/mecatronica.routes";
import bioquimicaRoutes  from "./routes/bioqumica.routes";
import gestionRoutes from "./routes/gestion.routes";
import nanoRoutes from "./routes/nano.routes";
import cors from "cors"
import cron from "node-cron"
import { consultarCarrera } from "./services/adminService";

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