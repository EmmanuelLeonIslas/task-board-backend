import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty({ message: 'Title cannot be empty' })
    @IsString()
    @MaxLength(100, { message: 'Title is too long' })
    title: string;
}