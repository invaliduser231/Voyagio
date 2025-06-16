import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingsService {
  private bookings: Booking[] = [];
  private idSeq = 1;

  create(tripId: number, dto: CreateBookingDto): Booking {
    const booking: Booking = { id: this.idSeq++, tripId, ...dto };
    this.bookings.push(booking);
    return booking;
  }

  findByTrip(tripId: number): Booking[] {
    return this.bookings.filter((b) => b.tripId === tripId);
  }

  findOne(id: number): Booking {
    const booking = this.bookings.find((b) => b.id === id);
    if (!booking) throw new NotFoundException('Booking not found');
    return booking;
  }

  update(id: number, dto: UpdateBookingDto): Booking {
    const booking = this.findOne(id);
    Object.assign(booking, dto);
    return booking;
  }

  remove(id: number) {
    const idx = this.bookings.findIndex((b) => b.id === id);
    if (idx === -1) throw new NotFoundException('Booking not found');
    this.bookings.splice(idx, 1);
    return { message: 'Deleted' };
  }
}
