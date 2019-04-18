import * as mongoose from 'mongoose';

export interface IPainting extends mongoose.Document{
    name: string,
    slug: string,
    description: string
    creation_date: string,
    place: string,
    tags: any[],
    materials: string,
    dimensions: string
}