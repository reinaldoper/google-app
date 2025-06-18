import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';
import { RegisterDto, LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const password = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: { ...dto, password },
    });
    return this.signToken(user.id.toString(), user.email);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (
      !user ||
      !user.password ||
      !(await bcrypt.compare(dto.password, user.password))
    ) {
      throw new Error('Credenciais inválidas');
    }
    return this.signToken(user.id.toString(), user.email);
  }

  socialLogin(user: { id: string | number; email: string }) {
    return this.signToken(user.id.toString(), user.email);
  }

  signToken(id: string, email: string) {
    const payload = { sub: id, email };
    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
