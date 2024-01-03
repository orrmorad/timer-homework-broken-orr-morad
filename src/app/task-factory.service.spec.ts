import { TestBed } from '@angular/core/testing';
import { TaskFactoryService } from './task-factory.service';

describe('TaskFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskFactoryService = TestBed.get(TaskFactoryService);
    expect(service).toBeTruthy();
  });

  it('should create a task', () => {
    const service: TaskFactoryService = TestBed.get(TaskFactoryService);
    const taskName = 'task';
    const task = service.createTask(taskName);
    expect(task.id).toBeDefined();
    expect(task.buttonText).toBe('play_arrow');
    expect(task.name).toBe(taskName);
    expect(task.timer).toBeDefined();
  })
});
