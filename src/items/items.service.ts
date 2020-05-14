import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';


@Injectable()
export class ItemsService {
    constructor(
        @InjectConnection() private connection: Connection,
        @InjectModel('Item') private itemModel: Model<Item>
    ) { }


    async findAll(): Promise<Item[]> {
        return await this.itemModel.find()
    }

    async findOne(id:string): Promise<Item[]>{
        return await this.itemModel.find({_id: id})
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async deleteOne(id:string){
        return await this.itemModel.findByIdAndRemove({_id: id})
    }

    async updateOne(id:string, item: Item): Promise<Item>{
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true })
    }


}
