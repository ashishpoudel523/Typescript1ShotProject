import app from "../backend/src/app"
import envConfig from "./src/config/config"

const startServer = ()=>{
    const port = envConfig.port || 3000
    app.listen(envConfig.port, ()=>{
        console.log(`server started at port ${port}`)
    })
}

startServer()
