import express, { Application, Request, Response } from "express";

const app: Application = express();

const port: number = 3001;

app.get("/hello", (req: Request, res: Response) => {
  const { name } = req.query;
  res.send(`Hello ${name}`);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
