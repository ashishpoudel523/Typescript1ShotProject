import app from "../backend/src/app";
import envConfig from "./src/config/config";
import connectDatabase from "./src/config/db";

const startServer = async () => {
  await connectDatabase();
  const port = envConfig.port || 3000;
  app.listen(port, () => {
    console.log(`server started at port ${port}`);
  });
};

startServer();
