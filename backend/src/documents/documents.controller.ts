import { Controller, Post, Get, Delete, Param } from '@nestjs/common';

@Controller('trips/:tripId/documents')
export class DocumentsController {
  @Post()
  upload() {
    return { message: 'upload document' };
  }

  @Get()
  list() {
    return [];
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { message: `deleted ${id}` };
  }
}
