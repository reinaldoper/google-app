import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [ConfigModule, PassportModule, JwtModule.register({})],
  providers: [AuthService, GoogleStrategy, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
