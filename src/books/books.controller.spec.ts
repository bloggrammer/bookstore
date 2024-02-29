import { DatabaseService } from '../database/database.service';
import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService, DatabaseService],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a book', async () => {
      const bookDto: CreateBookDto = {
        title: 'Sample Title',
        description: 'Sample Description',
        price: 10.99,
      };
      const createBookDto = {
        id: 1,
        title: bookDto.title,
        description: bookDto.description,
        price: bookDto.price,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'create').mockResolvedValueOnce(createBookDto);

      expect(await controller.create(createBookDto)).toBe(createBookDto);
    });

    describe('findAll', () => {
      it('should return an array of books', async () => {
        const books = [
          {
            id: 1,
            title: 'Book 1',
            description: 'Description of Book 1',
            price: 19.99,
            createdAt: new Date('2022-01-01'),
            updatedAt: new Date('2022-01-01'),
          },
          {
            id: 2,
            title: 'Book 2',
            description: 'Description of Book 2',
            price: 24.99,
            createdAt: new Date('2022-01-02'),
            updatedAt: new Date('2022-01-02'),
          },
        ];
        jest.spyOn(service, 'findAll').mockResolvedValueOnce(books);

        expect(await controller.findAll()).toBe(books);
      });
    });

    describe('findOne', () => {
      it('should return a book by ID', async () => {
        const bookId = '1';
        const book = {
          id: 1,
          title: 'Sample Book',
          description: 'Sample description',
          price: 29.99,
          createdAt: new Date('2022-01-01'),
          updatedAt: new Date('2022-01-02'),
        };
        jest.spyOn(service, 'findOne').mockResolvedValueOnce(book);

        expect(await controller.findOne(bookId)).toBe(book);
      });
    });

    describe('update', () => {
      it('should update a book', async () => {
        const bookId = '1';
        const updateBookDto = {
          title: 'Updated Title',
          description: 'Updated Description',
          price: 39.99,
        };

        const updatedBook = {
          id: 1,
          title: updateBookDto.title,
          description: updateBookDto.description,
          price: updateBookDto.price,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        jest.spyOn(service, 'update').mockResolvedValueOnce(updatedBook);

        expect(await controller.update(bookId, updateBookDto)).toBe(
          updatedBook,
        );
      });
    });

    describe('remove', () => {
      it('should remove a book', async () => {
        jest.spyOn(service, 'remove').mockResolvedValueOnce(undefined);
        expect(await controller.remove('1')).toBeUndefined();
      });
    });
  });
});
