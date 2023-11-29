import Item from "../model/model.js";

export const create  = async(req,res)=>{
    try{

        const data = new Item(req.body);

        if(!data){
            return res.status(400).json({msg: "Data not found"});
        }

        await data.save();
        res.status(200).json({msg: "Item created successfully"});
    }catch(err){
        res.status(500).json({error: err});
    }
}

export const getAll = async(req,res)=>{
    try{

        // Example: localhost:8000/api/books?title=test3&author=test2
        const titlef = req.query.title;
        const authorf = req.query.author;

        // console.log(titlef +" "+authorf);

        let data;
        if (titlef || authorf) {
            data = await Item.find({ title: titlef , author:authorf });
        } else {
            data = await Item.find();
        }

        // data = await Item.find();

        if(!data){
            return res.status(400).json({msg: "Item data not found"});
        }

        res.status(200).json({data});
    }catch(err){
        res.status(500).json({error: err});
    }
}

export const getOne = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await Item.findById(id);

        if(!data){
            res.status(404).json({msg: "data not found"});
        }

        res.status(200).json(data);
    }catch(err){
        res.status(500).json({error: err});
    }
}

export const update = async(req,res)=>{
    try{
        const id = req.params.id;

        const data = await Item.findById(id);

        if(!data){
            return res.status(404).json({msg: "Item not found"});
        }

        const updatedData = await Item.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({msg: "Item updated successfully"});
    }catch(err){
        res.status(500).json({error: err});
    }
}

export const deleteItem = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await Item.findById(id);

        if(!data){
            res.status(404).json({msg: "Item not found"});
        }
        await Item.findByIdAndDelete(id);
        res.status(200).json({msg : "Item deleted successfully"});
    }catch(err){
        res.status(500).json({error: err});
    }
}