import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const getPopularBooks = async (req, res) => {
    try {
      const books = await Book.find().sort({ purchaseCount: -1 }).limit(10); // top 10
      res.status(200).json(books);
    } catch (error) {
      console.error("Error fetching popular books:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  