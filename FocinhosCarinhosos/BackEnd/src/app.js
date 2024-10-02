import express from "express";
import conectaDatabase from "./config/dbConect.js";
import routes from "./routes/index.js";
import { login } from "./controllers/userController.js";
import cors from "cors"; 

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão efetuada com sucesso.");
});

const app = express();

app.use(cors());

app.use(express.json());

routes(app);

export default app;