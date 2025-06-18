import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleRedirect(@Req() req: Request, @Res() res: Response) {
    if (
      !req.user ||
      typeof req.user !== 'object' ||
      !('id' in req.user) ||
      !('email' in req.user)
    ) {
      return res.status(400).send('Invalid user data');
    }
    const user = req.user as { id: string | number; email: string };
    const token = this.authService.socialLogin(user);
    return res.redirect(
      `http://localhost:3001/google-success?token=${token.access_token}`,
    );
  }
}
