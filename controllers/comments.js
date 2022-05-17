
const Comments = require("../models/comments");

const fs = require("fs");

exports.createComments = (req, res, next) => {
  const commentsObject = JSON.parse(req.body.comments);
  
  const comments = new Comments({
    ...commentsObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    
  }); //les images et textes doivent etre traité différement, elles sont appelées via leur URI
  
  comments
    .save()
    .then(() => res.status(201).json({ message: "Commentaire enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};


  