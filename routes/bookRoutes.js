const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} = require("../controllers/bookcontroller");

router.post("/", authMiddleware, addBook);
router.get("/", authMiddleware, getBooks);
router.get("/:id", authMiddleware, getBookById);
router.put("/:id", authMiddleware, updateBook);
router.delete("/:id", authMiddleware, deleteBook);

module.exports = router;
