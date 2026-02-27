import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: true })
export class Task {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true, enum: ['pending', 'in_progress', 'completed'] })
    status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);