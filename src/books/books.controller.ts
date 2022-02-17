import { Controller, Get, Post, Delete, Put, Param, Body, Req } from '@nestjs/common';
import { BookInfoDto } from 'src/dto/book-info.dto';
import { BooksService } from './books.service';
import { Book } from 'src/interfaces/book.interface';
@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) { }

    // Adding a book
    @Post()
    createBook(@Body() bookInfoDto: BookInfoDto): Promise<Book> {
        return this.bookService.createBook(bookInfoDto);
    }
    // getting all books from database
    // @Get()
    // findAllBooks(@Req() req) {
    //     return this.bookService.FindAll(req.query);
    // }

      @Get()
   Findall(): Promise<Book[]> {
        return this.bookService.FindAll();
      }

    // getting a single book by book id from database
    @Get(':id')
    FindOneBook(@Param('id') id): Promise<Book> {
        return this.bookService.FindOneBook(id);
    }

    // deleting a book by book id from database
    @Delete(':id')
    deleteBook(@Param('id') id): Promise<Book> {
        return this.bookService.deleteBook(id);
    }

    // editing book information
    @Put(':id')
    updateBook(@Body() updateBookInfoDto: BookInfoDto, @Param('id') id): Promise<Book> {
        return this.bookService.updateBook(id, updateBookInfoDto);
    }
}

