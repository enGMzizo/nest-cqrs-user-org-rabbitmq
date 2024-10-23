import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserManagementModule } from './user-management/user-management.module';
import { OrganizationManagementModule } from './organization-management/organization-management.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserManagementModule,
    OrganizationManagementModule,
  ],
})
export class AppModule {}
