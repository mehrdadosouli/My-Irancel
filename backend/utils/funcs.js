const db = require("../db/MyIrancellDB.js");

const getUserId = (username, password) => {
  return new Promise((resolve, reject) => {
    let querys = `SELECT id FROM register WHERE username=? AND password=?`;
    db.query(querys, [username, password], (err, res) => {
      if (err) {
        console.log("not user");
        return reject(false);
      } else {
        if (res) {
          return resolve(res);
        } else {
          return false;
        }
      }
    });
  });
};

const getUserID = (token) => {
  return new Promise((resolve, reject) => {
    let queryId = `SELECT id FROM register WHERE token=?`;
    db.query(queryId, [token], (err, res) => {
      if (err) {
        return reject(false);
      } else {
        return resolve(res);
      }
    });
  });
};

const generateToken = () => {
  let txt = `Ipsum is there fore always`;

  let element = "";

  for (let i = 0; i < txt.length; i++) {
    element += txt[Math.floor(Math.random() * txt.length)];
  }
  let numberRandom =
    Math.round(Math.random() * 9000) + element.split(" ").reverse().join("");
  let res =
    numberRandom.slice(0, Math.floor(Math.random() * txt.length)) +
    txt.slice(txt.length).split("").reverse().join("");
  return numberRandom + res;
};

module.exports = {
  getUserId,
  generateToken,
  getUserID,
};
