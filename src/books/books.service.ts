import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/interfaces/book.interface';

@Injectable()
export class BooksService {
 constructor(@InjectModel('Book') private bookModel:Model<Book>){}

 async FindAll():Promise<Book[]>{
     return await this.bookModel.find()
 }
//  async Findall(options: QueryOptions) {
//     if (options.fields) {
//         const results = await this.itemModel
//             .find({ [options.fields]: { $regex: `.*${options.text}.*` } }, (err, doc) => {
//                 return doc;
//             })
//             .skip(Number(options.offset))
//             .limit(Number(options.limit))
//             .exec();
//         return { results, total: results.length };
//     } else {
//         const results = await this.itemModel
//             .find()
//             .skip(Number(options.offset))
//             .limit(Number(options.limit))
//             .exec();
//         return { results, total: results.length };
//     }
// }
 async FindOneBook(id: string): Promise<Book>{
     return await this.bookModel.findOne({_id:id});
 }

 async createBook(book: Book): Promise<Book>{
     const newBook = new this.bookModel(book);
     return await newBook.save()
 }

 async deleteBook(id: string):Promise<Book>{
     return await this.bookModel.findByIdAndRemove(id);
 }

 async updateBook(id: string,book: Book): Promise<Book>{
     return await this.bookModel.findByIdAndUpdate(id,book, {new: true});
 }
}

