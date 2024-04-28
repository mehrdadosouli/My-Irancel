const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyparser.json({ extended: false }));
const {
  userRouter,
  registerRouter,
  getinfo,
  mypanel,
  changeinfo,
  login,
  getPacket_services,
} = require("./routers/users.js");

app.use("/", userRouter);
app.use("/", registerRouter);
app.use("/", getinfo);
app.use("/", mypanel);
app.use("/", changeinfo);
app.use("/", login);
app.use("/", getPacket_services);

app.listen(5000);
