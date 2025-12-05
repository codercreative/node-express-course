const { people } = require("../data.js");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const addPerson = (req, res) => {
  if (req.body.name) {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  } else {
    res.status(400).json({ success: false, message: "Please provide a name" });
  }
};

const updatePerson = (req, res) => {
  //req.params = URL info (like id)
  //req.body = data included in the request (e.g., JSON object {name: "John"})
  const id = req.params.id;
  const name = req.body.name;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    //id not found
    return res.status(404).json({ message: "That person was not found" });
  }

  if (!name) {
    //invalid entry from user
    return res.status(400).json({ message: "Please provide a name" });
  }

  person.name = name;
  return res.status(200).json({ success: true, data: person.name });
};

const deletePerson = (req, res) => {
  const id = req.params.id;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ message: "That person was not found" });
  }
  people = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: people });
};

module.exports = { getPeople, addPerson, updatePerson, deletePerson };
