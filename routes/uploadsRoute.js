const express = require("express");
const router = express.Router();
const uploadsController = require('../controller/uploadsController');


    router
    
       .post("/upload", uploadsController.upload)
       .get("/files", uploadsController.getListFiles)
       .get("/files/:name", uploadsController.download)
  
       

module.exports = router;
