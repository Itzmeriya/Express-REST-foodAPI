const express = require('express');
const food = require('../models/food');
const router = express.Router();
const Food= require('../models/food');

//creating a new food items
router.post('/',(req,res)=>{
    const food = new Food({
        name:req.body.name,
        price:req.body.price,
        type:{name:req.body.type.name,
            time:req.body.type.time}
    });
    food.save().
    then ((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({message:err});
    })
});

//getting all available food details
router.get('/',async(req,res) =>{try
    {
        const foods = await food.find();
        res.json(foods);
    }catch (err){res.json({message:err});
}
});

//getting a food by id
router.get('/:foodid', async(req,res) =>{try
    {
        const food = await Food.findById(req.params.foodid);
        res.json(food);
    }catch(err){res.json({message:err});
}

});

//deleting a food item
router.delete('/:foodid',async(req,res)=>{try
    {
        const removefood = await Food.deleteOne({
           _id : req.params.foodid});
           res.json(removefood);
        }catch (err){
            res.json({message:err});
        
    }
});

//update a food item by id
router.patch('/:foodid',async(req,res)=>{ try
    {
        const food = await Food.findOne({
            _id : req.params.foodid});
            if(req.body.name){
                food.name= req.body.name;
            }
            if(req.body.price){
                food.price= req.body.price;
            }
            if (req.body.type){
                food.type = req.body.type;
            }
            await food.save();
            res.json(food);
        }catch(err){
            res.json({message:err});
    }
});


module.exports= router;