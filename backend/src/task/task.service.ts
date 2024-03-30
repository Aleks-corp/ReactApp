import { Injectable } from '@nestjs/common';
import { createTaskDto, updateTaskDto } from './task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async newTask(task: createTaskDto): Promise<Task> {
    return await this.taskRepository.save({ ...task });
  }

  async getTaskById(strId: string): Promise<Task> {
    const id = Number(strId);
    return await this.taskRepository.findOne({ where: { id } });
  }

  async updateTaskById(strId: string, newTask: updateTaskDto): Promise<Task> {
    const id = Number(strId);
    await this.taskRepository.update(id, newTask);
    return await this.taskRepository.findOne({ where: { id } });
  }

  async deleteTaskById(id: string) {
    return await this.taskRepository.delete(id);
  }
}
