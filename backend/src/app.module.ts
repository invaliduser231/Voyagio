import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGO_URI ?? 'mongodb://localhost/voyagio',
    ),
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
