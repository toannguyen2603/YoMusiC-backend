const Category = require('../models/category.model');


// TODO: create a category music

module.exports = {
    createCategory: async (req, res) => {
        // get attribute of category
        const { topic_id, name , thumbnail} = req.body;
        try {
            const category = new Category({
                topic_id,
                name,
                thumbnail
            })

            // save category in database
            category.save();
            return res.status(201).json({ category: category, message: "Create new category successfully" });
        } catch (err) {
            res.status(500).json(err);
        }
    },
      // get all info of the topic
      getAllCategory: async (req, res) => {
        try {
            let categories = await Category.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json(err);
        }
    },
    // get one info of the topic
      getOne: async (req, res) => {
        try {
            let cate = await Category.findById(req.params.id);
            res.status(200).json(cate);
        } catch (err) {
            res.status(500).json(err);
            console.log(error);
        }
    },
      //   update one
      updateOne: async (req, res) => {
        try {
            await Category.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("Category updated successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //  delete one
    deleteOne: async (req, res) => {
        try {
            let cate = await Category.findById(req.params.id);
            await cate.delete();
            res.status(200).json("Category deleted successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },

}
