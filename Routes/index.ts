import { Express } from 'express';
import setUserRoutes from './UserRoutes'
 
const setRoutes = (app: Express) => {
    setUserRoutes(app)
}

export default setRoutes