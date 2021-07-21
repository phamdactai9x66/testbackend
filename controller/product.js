import Product from '../models/product';

export const creat = (req,res) => {
    const product = new Product(req.body);
    product.save((err,data) => {
        if(err){
            res.status(400).json({
                error: 'Not add'
            })
        }
        res.json(data);
    })
}
export const list = (req,res) => {
    Product.find((err,data) => {
        if(err){
            res.status(400).json({
                error: 'Not found'
            })
        }
        res.json(data);
    })
}
export const id = (req, res, next, id) => {
    Product.findById(id).exec((err, data) => {
        if(err || !data){
            res.status(400).json({
                error: "Not found"
            })
        }
        req.data = data;
        next();
    })
}
export const product = (req,res) => {
    return res.json(req.data)
}
export const remove = (req,res) => {
    const product = req.data;
    product.remove((err, data) => {
        if(err || !data){
            res.status(400).json({
                error: "Can not delete"
            })
        }
        res.json({
            data,
            message: "Successfully"
        })
    })
}
export const update = (req,res) => {
    const product = req.data;
    console.log(req.body.name);
    product.name = req.body.name;
    product.save((err, data) => {
        if(err || !data){
            return res.status(400).json({
                error: "Not found"
            })
        }
        res.json(data);
    })
}