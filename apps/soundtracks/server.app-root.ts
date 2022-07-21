import Application, { Request, Response } from "express";

const app = Application();
const port = 3000;

app.get("/", function (req: Request, res: Response) {
  res.send("Hello 4");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
