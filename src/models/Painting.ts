import { Schema, model } from "mongoose";
import { IPainting } from "../interfaces/IPainting";

const paintingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creation_date: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    tags: [],
    materials: {
        type: String,
        required: true
    },
    dimensions: {
        type: String,
        required: true
    }
});

export const Painting = model<IPainting>('Painting', paintingSchema);