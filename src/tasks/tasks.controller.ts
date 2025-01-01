import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class TasksController {
  @Get()
  findAll(): string {
    return `Server is running on port ${process.env.PORT} ${Number(process.env.SERVER_NUMBER) === 1 ? 'Primary' : 'Secondary'}`;
  }
}
