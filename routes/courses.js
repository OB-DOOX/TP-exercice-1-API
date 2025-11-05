const express = require("express");
const router = express.Router();

let listeCourses = [
  { id: 1, nom: "Lait", quantite: 1 },
  { id: 2, nom: "oeufs", quantite: 2 },
  { id: 3, nom: "raisins", quantite: 6 },
];

let nextId = 4;

router.get("/", (req, res) => {
  res.json(listeCourses);
});

router.post("/", (req, res) => {
  const { nom, quantite } = req.body;

  const Course = {
    id: nextId++,
    nom,
    quantite,
  };
  listeCourses.push(Course);

  res.status(201).json(Course);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nom, quantite } = req.body;
  const course = listeCourses.find((item) => item.id === id);
  if (!course) {
    return res.status(404).json({ message: "0 article récupéré" });
  }

  course.nom = nom;
  course.quantite = quantite;
  res.json(course);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const course = listeCourses.findIndex((item) => item.id === id);
  if (course === -1) {
    return res.status(404).json({ message: "0 article récupéré" });
  }
  const supprime = listeCourses.splice(course, 1)[0];

  res.json(supprime);
});

module.exports = router;
