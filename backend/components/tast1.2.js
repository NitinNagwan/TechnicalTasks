const QRCode = require("qrcode");
const axios = require("axios");
const FormData = require("form-data");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const fs = require("fs");

const QR = {
  async qrGenerator(req, res) {
    try {
      data = {
        name: "nitin",
        phone: 128181787,
      };

      const token = await jwt.sign(data, process.env.SECRET_key, {
        expiresIn: "24h",
      });
      const opts = {
        errorCorrectionLevel: "L",
        type: "terminal",
        quality: 0.1,
        margin: 1,
        color: {
          dark: "#208698",
          light: "#FFF",
        },
      };
      const string = JSON.stringify({ encrypted_str: `${token}` });
      const qrImage = await QRCode.toDataURL(string, opts);

      if (!qrImage) {
        res.json({
          success: false,
          message: "Could not generate QR Code",
          image: null,
        });
      } else {
        res.json({
          succes: true,
          message: "Qr Generation",
          image: qrImage,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },

  decode(req, res) {
    try {
      const data = JSON.parse(req.body.body);

      const decode = jwt.verify(data.encrypted_str, process.env.SECRET_key);
      console.log(decode);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = QR;
