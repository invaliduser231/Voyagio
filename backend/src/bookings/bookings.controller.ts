import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller()
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('trips/:tripId/bookings')
  create(
    @Param('tripId', ParseIntPipe) tripId: number,
    @Body() dto: CreateBookingDto,
  ) {
    return this.bookingsService.create(tripId, dto);
  }

  @Get('trips/:tripId/bookings')
  findByTrip(@Param('tripId', ParseIntPipe) tripId: number) {
    return this.bookingsService.findByTrip(tripId);
  }

  @Get('bookings/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookingsService.findOne(id);
  }

  @Patch('bookings/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBookingDto) {
    return this.bookingsService.update(id, dto);
  }

  @Delete('bookings/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.bookingsService.remove(id);
  }
}
