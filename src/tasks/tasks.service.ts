import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async create(CreateTaskDto: CreateTaskDto): Promise<Task> {
        const createdTask = new this.taskModel({ 
            ...CreateTaskDto,
            status: 'pending',
        });
        return createdTask.save();
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findOne(id: string): Promise<Task | null> {
        return this.taskModel.findById(id).exec();
    }

    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
        return this.taskModel
            .findByIdAndUpdate(id, updateTaskDto, { new: true })
            .exec();
    }

    async remove(id: string): Promise<Task | null> {
        return this.taskModel.findByIdAndDelete(id).exec();
    }
}