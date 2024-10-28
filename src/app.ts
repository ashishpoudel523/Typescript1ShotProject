import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import noteRoute from "./note/noteRoute";

const app = express();

//parse incoming json to handle undefined error
app.use(express.json());

app.use("api/notes", noteRoute);
app.use(globalErrorHandler);
export default app;
