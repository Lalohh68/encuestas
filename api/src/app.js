import express from "express";
import morgan from "morgan";
import config from "./config";
import encuestasRoutes from "./routes/encuestasRoutes";
const cors = require('cors');
const port = config.port

const app=express();
app.use(cors())
//configuraciones
app.set("port", port);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/encuestas",encuestasRoutes);

export default app;