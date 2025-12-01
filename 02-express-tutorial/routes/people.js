const express = require("express");
const router = express.Router();
const {
  getPeople,
  addPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people.js");

// router.get("/", getPeople);
// router.post("/", addPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(addPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
