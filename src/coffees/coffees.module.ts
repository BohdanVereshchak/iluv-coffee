import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Coffee } from './entities/coffee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity/flavor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor])], 
    controllers: [CoffeesController], 
    providers: [CoffeesService]
})
export class CoffeesModule {}
