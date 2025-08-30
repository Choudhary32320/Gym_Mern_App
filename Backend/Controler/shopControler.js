const Item = require("../Schema/shopSchema");

const getItem = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve users", error: error.message });
  }
};

const createItem = async (req, res) => {
  const { name, price, quantity, description } = req.body;

  try {
    if (!name || !price || !quantity) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingItem = await Item.findOne({ name });
    if (existingItem) {
      return res.status(409).json({ message: "Item already exists." });
    }

    const baseUrl = req.protocol + "://" + req.get("host");
    const imagePath = req.file ? `${baseUrl}/uploads/${req.file.filename}` : null;

    const newItem = await Item.create({
      name,
      price,
      quantity,
      description,
      image: imagePath,
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error("POST /Items error:", error.message);
    res.status(500).json({
      message: "Server error while creating Item.",
      error: error.message,
    });
  }
};


const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // safer update
      { new: true, runValidators: true } // return updated doc + run schema validation
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating item", error: error.message });
  }
};

const getSingleItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching single item:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteItem = async (req, res) => {
  const deletedItem = await Item.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedItem);
};

module.exports = {
  getItem,
  createItem,
  updateItem,
  getSingleItem,
  deleteItem,
};
