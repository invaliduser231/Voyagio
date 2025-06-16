import { Controller, Post, Get, Patch, Delete, Param } from '@nestjs/common';

@Controller('trips/:tripId/notes')
export class NotesController {
  @Post()
  create() {
    return { message: 'create note' };
  }

  @Get()
  list() {
    return [];
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return { message: `update ${id}` };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `delete ${id}` };
  }
}
