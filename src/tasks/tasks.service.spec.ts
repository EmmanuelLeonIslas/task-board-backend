import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';

describe('TasksService', () => {
  let service: TasksService;
  let model: Model<Task>;

  const mockTaskModel = {
    new: jest.fn(),
    constructor: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    exec: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getModelToken(Task.name),
          useValue: mockTaskModel,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
    model = module.get<Model<Task>>(getModelToken(Task.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const mockTasks = [
        {
          _id: '507f1f77bcf86cd799439011',
          title: 'Test Task',
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(model, 'find').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(mockTasks),
      } as any);

      const result = await service.findAll();

      expect(result).toEqual(mockTasks);
      expect(model.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single task', async () => {
      const mockTask = {
        _id: '507f1f77bcf86cd799439011',
        title: 'Test Task',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(model, 'findById').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(mockTask),
      } as any);

      const result = await service.findOne('507f1f77bcf86cd799439011');

      expect(result).toEqual(mockTask);
      expect(model.findById).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should be defined', async () => {
      expect(service.create).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof service.create).toBe('function');
    })
  });

  describe('update', () => {
    it('should update and return a task', async () => {
      const updateTaskDto = { title: 'Updated Task', status: 'completed' };
      const mockUpdatedTask = {
        _id: '507f1f77bcf86cd799439011',
        title: 'Updated Task',
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(mockUpdatedTask),
      } as any);

      const result = await service.update(
        '507f1f77bcf86cd799439011',
        updateTaskDto,
      );

      expect(result).toEqual(mockUpdatedTask);
      expect(model.findByIdAndUpdate).toHaveBeenCalledWith(
        '507f1f77bcf86cd799439011',
        updateTaskDto,
        { new: true },
      );
    });
  });

  describe('remove', () => {
    it('should delete and return a task', async () => {
      const mockDeletedTask = {
        _id: '507f1f77bcf86cd799439011',
        title: 'Deleted Task',
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(model, 'findByIdAndDelete').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(mockDeletedTask),
      } as any);

      const result = await service.remove('507f1f77bcf86cd799439011');

      expect(result).toEqual(mockDeletedTask);
      expect(model.findByIdAndDelete).toHaveBeenCalledWith('507f1f77bcf86cd799439011');
    });
  });
});
