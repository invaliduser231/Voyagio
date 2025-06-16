import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TripsModule } from './trips/trips.module';
import { BookingsModule } from './bookings/bookings.module';
import { DocumentsModule } from './documents/documents.module';
import { NotesModule } from './notes/notes.module';
import { ChecklistModule } from './checklist/checklist.module';
import { InfoModule } from './info/info.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TripsModule,
    BookingsModule,
    DocumentsModule,
    NotesModule,
    ChecklistModule,
    InfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
