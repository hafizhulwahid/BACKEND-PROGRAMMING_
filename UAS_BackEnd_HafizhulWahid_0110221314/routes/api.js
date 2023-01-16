// import PatientController
const PatientController = require("../controllers/PatientController.js");


// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express"); 
});

// Membuat routing patient
router.get("/patients", PatientController.index);

router.post("/patients", PatientController.store);

router.put("/patients/:id", PatientController.update);

router.delete("/patients/:id", PatientController.destroy);

router.get("/patients/:id", PatientController.find);

router.get("/patients/search/:name", PatientController.search_name);

router.get("/patients/status/positive", PatientController.positive_p);

router.get("/patients/status/recovered", PatientController.recovered_p);

router.get("/patients/status/dead", PatientController.dead_p);


// export router
module.exports = router;
