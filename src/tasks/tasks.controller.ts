import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import type { UserDocument } from 'src/auth/schemas/user.schema';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @GetUser() user: UserDocument) {
    return this.tasksService.create(createTaskDto, user);
  }

  @Get()
  findAll(@GetUser() user: UserDocument) {
    return this.tasksService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @GetUser() user: UserDocument) {
    return this.tasksService.findOne(id, user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateTaskDto: UpdateTaskDto,
    @GetUser() user: UserDocument,
  ) {
    return this.tasksService.update(id, UpdateTaskDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @GetUser() user: UserDocument) {
    return this.tasksService.remove(id, user);
  }
}
