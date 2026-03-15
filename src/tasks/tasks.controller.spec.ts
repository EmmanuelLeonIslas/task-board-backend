import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  const mockTasksService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const mockTasks = [
        {
          _id: '507f1f77bcf86cd799439011',
          title: 'Test task',
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockTasksService.findAll.mockResolvedValue(mockTasks);

      const result = await controller.findAll();

      expect(result).toEqual(mockTasks);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return a single task', async () => {
      const mockTask = [
        {
          _id: '507f1f77bcf86cd799439011',
          title: 'Test Task',
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockTasksService.findOne.mockResolvedValue(mockTask);

      const result = await controller.findOne('507f1f77bcf86cd799439011');

      expect(result).toEqual(mockTask);
      expect(service.findOne).toHaveBeenCalledWith('507f1f77bcf86cd799439011');
    });
  });

  describe('create', () => {
    it('should create and return a task', async () => {
      const createTaskDto = { title: 'New Task' };
      const mockTask = [
        {
          _id: '507f1f77bcf86cd799439011',
          title: 'Test Task',
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockTasksService.create.mockResolvedValue(mockTask);

      const result = await controller.create(createTaskDto);

      expect(result).toEqual(mockTask);
      expect(service.create).toHaveBeenCalledWith(createTaskDto);
    });
  });

  describe('update', () => {
    it('should update and return a task', async () => {
      const taskId = '507f1f77bcf86cd799439011';
      const updatedTaskDto = { status: 'completed' };
      const mockUpdatedTask = {
        _id: taskId,
        title: 'Test Task',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockTasksService.update.mockResolvedValue(mockUpdatedTask);

      const result = await controller.update(taskId, updatedTaskDto);

      expect(result).toEqual(mockUpdatedTask);
      expect(service.update).toHaveBeenCalledWith(taskId, updatedTaskDto);
    });
  });
});
