import { IsEnum, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    @MaxLength(100, { message: 'Title is too long' })
    title?: string;

    @IsOptional()
    @IsEnum(['pending', 'in_progress', 'completed'], { 
        message: 'Status must be pending, in_progress, or completed'
    })
    status?: string;
}