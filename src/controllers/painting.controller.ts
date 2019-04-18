import { Request, Response } from "express";
import { Painting } from "../models/Painting";

export class PaintingController {

    public findAllPaintings = async(req: Request, res: Response) => {
        try {
            const paintings = await Painting.find({});
            res.status(200).json(paintings);
        } catch(error) {
            res.status(500).send({ message: error.message, success: "false" });
        }
    }

}