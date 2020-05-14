import { Document } from "mongoose";

export class CreateItemDto extends Document {
    readonly name: string;
    readonly description: string;
    readonly qty: number;
}