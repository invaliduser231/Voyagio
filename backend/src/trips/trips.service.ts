import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { Trip } from './entities/trip.entity';

@Injectable()
export class TripsService {
  private trips: Trip[] = [];
  private idSeq = 1;

  create(dto: CreateTripDto): Trip {
    const trip: Trip = { id: this.idSeq++, ...dto };
    this.trips.push(trip);
    return trip;
  }

  findAll(): Trip[] {
    return this.trips;
  }

  findOne(id: number): Trip {
    const trip = this.trips.find((t) => t.id === id);
    if (!trip) throw new NotFoundException('Trip not found');
    return trip;
  }

  update(id: number, dto: UpdateTripDto): Trip {
    const trip = this.findOne(id);
    Object.assign(trip, dto);
    return trip;
  }

  remove(id: number) {
    const idx = this.trips.findIndex((t) => t.id === id);
    if (idx === -1) throw new NotFoundException('Trip not found');
    this.trips.splice(idx, 1);
    return { message: 'Deleted' };
  }
}
