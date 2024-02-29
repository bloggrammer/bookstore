import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BooksService {
  constructor(private readonly databaeService: DatabaseService) {}
  create(createBookDto: Prisma.BookCreateInput) {
    return this.databaeService.book.create({ data: createBookDto });
  }

  findAll() {
    return this.databaeService.book.findMany({});
  }

  async findOne(id: number) {
    const book = await this.databaeService.book.findUnique({
      where: { id },
    });
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found.`);
    }
    return book;
  }

  update(id: number, updateBookDto: Prisma.BookUpdateInput) {
    return this.databaeService.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  remove(id: number) {
    return this.databaeService.book.delete({ where: { id } });
  }
}
