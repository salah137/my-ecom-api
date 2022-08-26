import { Test, TestingModule } from '@nestjs/testing';
import { User.AuthService } from './user.auth.service';

describe('User.AuthService', () => {
  let service: User.AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User.AuthService],
    }).compile();

    service = module.get<User.AuthService>(User.AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
