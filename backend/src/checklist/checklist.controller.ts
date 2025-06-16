import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';

@Controller('trips/:tripId/checklist')
export class ChecklistController {
  @Get()
  list() {
    return [];
  }

  @Post()
  add() {
    return { message: 'add item' };
  }

  @Patch(':id')
  toggle(@Param('id') id: string) {
    return { message: `toggle ${id}` };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `delete ${id}` };
  }
}
