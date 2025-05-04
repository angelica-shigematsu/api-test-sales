import http from "http"
import SalesController from "./src/controllers/SaleController.js";

const requestListener = async (req, res) => {

  const sale = new SalesController();

   if(req.url == "/create" && req.method == "POST") {

    if (req.headers['content-type'] === 'application/json') {

    const data = await sale.create(json);

    res.setHeader("Content-Type", "application/json");
    res.writeHead(201);
    res.end(`message: `, data);
  }
}
}

const server = http.createServer(requestListener);
server.listen(8080, () => {
    console.log(`Server is running on http://localhost:8080`);
});