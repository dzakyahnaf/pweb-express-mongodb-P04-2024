import Book from "../models/book.model";

export class MechanismService {
  static async borrow(id: string): Promise<number> {
    const book = await this.getBookById(id);
    this.validateBookAvailability(book);
    book.qty -= 1;
    await book.save();
    return book.qty;
  }

  static async returnBook(id: string): Promise<number> {
    const book = await this.getBookById(id);
    book.qty += 1;
    this.validateBookReturn(book);
    await book.save();
    return book.qty;
  }

  private static async getBookById(id: string): Promise<any> {
    const book = await Book.findById(id);
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  }

  private static validateBookAvailability(book: any): void {
    if (book.qty === 0) {
      throw new Error("Book not available / out of stock");
    }
  }

  private static validateBookReturn(book: any): void {
    if (book.qty > book.initialQty) {
      throw new Error("Invalid return book, book qty exceeded initial qty");
    }
  }
}
