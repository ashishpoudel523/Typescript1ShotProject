import { NextFunction, Request, Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";
import createHttpError from "http-errors";

const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file
      ? `${envConfig.backendUrl}/${req.file.filename}`
      : "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg";
    const { title, subtitle, description } = req.body;
    if (!title || !subtitle || !description || title === undefined) {
      res.status(400).json({
        message: "Please provide title, subtitle, description",
      });
      return;
    }
    await noteModel.create({
      title,
      subtitle,
      description,
      file,
    });
    res.status(201).json({
      message: "Note created!",
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Error while creating"));
  }
};

export { createNote };
