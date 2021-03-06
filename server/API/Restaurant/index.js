import express from "express";
import passport from "passport";

//Database model
import { RestaurantModel } from "../../database/allModels"

// validation
import { ValidateRestaurantCity, ValidateRestaurantSearchString,} from "../../Validation/restaurant";
import { ValidateRestaurantId } from "../../Validation/food";

const Router = express.Router();

/*
Route     /
Des       Get all the restaurant details based on city
Params    none
Access    Public
Method    GET  
*/
Router.get("/", async (req, res) => {
    try {
        await ValidateRestaurantCity(req.query);

        const { city } = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    }   catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /
Des       Get individual restaurant details based on id
Params    id
Access    Public
Method    GET  
*/
Router.get("/:id", async (req, res) => {
    try {
        await ValidateRestaurantId(req.params);

        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if(!restaurant)
          return res.status(404).json({ error: "Restaurant Not Found" });
        return res.json({ restaurant });
    }   catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /search
Des       Get restaurant details based on search string
Params    none
Access    searchString
Method    GET  
*/
Router.get("/search", async (req, res) => {
    try {
        await ValidateRestaurantSearchString(req.body);

        const { searchString } = req.body;
        const restaurant = await RestaurantModel.find({
            name: { $regex: searchString, $optional: "i" },
        });
        if(!restaurant)
          return res.status(404).json({ error: `No Restaurant matched with ${searchString}` });
        return res.json({ restaurant });
    }   catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;