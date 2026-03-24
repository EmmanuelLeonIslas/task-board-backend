import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UserDocument } from '../auth/schemas/user.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(
    createTaskDto: CreateTaskDto,
    user: UserDocument,
  ): Promise<Task> {
    const createdTask = new this.taskModel({
      ...createTaskDto,
      status: 'pending',
      user: user._id,
    });
    return createdTask.save();
  }

  async findAll(user: UserDocument): Promise<Task[]> {
    return this.taskModel.find({ user: user._id }).exec();
  }

  async findOne(id: string, user: UserDocument): Promise<Task | null> {
    return this.taskModel.findOne({ _id: id, user: user._id }).exec();
  }

  async update(
    id: string,
    updateTaskDto: UpdateTaskDto,
    user: UserDocument,
  ): Promise<Task | null> {
    return this.taskModel
      .findOneAndUpdate({ _id: id, user: user._id }, updateTaskDto, {
        new: true,
      })
      .exec();
  }

  async remove(id: string, user: UserDocument): Promise<Task | null> {
    return this.taskModel.findOneAndDelete({ _id: id, user: user._id }).exec();
  }
}
