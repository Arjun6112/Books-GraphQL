import {Schema,model} from 'mongoose';

interface Book{
    id? : string,
    author : string,
    title : string,
    year : Number,
}

const bookSchema = new Schema<Book>({

    id:String,
    author:{type:String,required:true},
    title:{type:String,required:true},
    year:{type:Number,required:true},

});

const Book = model<Book>('books',bookSchema);

export default Book;
