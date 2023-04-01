// index.ts
// author: @yesic4n
import Application from "./app";

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// create app
const app = new Application
// run app on port 3001 || PORT ENV
app.run()
