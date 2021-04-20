import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('api')
export class ApiController {

    @Get()
    getAll(): string {
        return "getAll"
    }

    @Get(':id')
    getById(@Param("id") id: string): string {
        return "get by " + id
    }

    @Post()
    createBook(@Body() createBook: CreateBookDto): string {
        return `Title - ${createBook.title}, author - ${createBook.author}`
    }
}
