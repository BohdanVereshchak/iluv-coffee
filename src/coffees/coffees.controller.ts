import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffesService: CoffeesService) {}
    @Get()
    findAll(@Query() paginationQuery : any){
        // const { limit, offset } = paginationQuery;
        return this.coffesService.findAll();
    }

    @Get(":id")
    findOne(@Param('id') id : string){
        return this.coffesService.findOne(id);
    }

    @Post()
    create(@Body() body : any){
        return body;
    }

    @Patch(":id")
    update(@Param('id') id : string, @Body('body') body : any){
        return this.coffesService.update(id, body);
    }

    @Delete(":id")
    remove(@Param('id') id : string){
        return this.coffesService.remove(id);
    }
}
