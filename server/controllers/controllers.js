const pool = require('../db');

const getProduct= async (req, res)=>{
    const RESULT = await pool.query('SELECT * FROM task')
    console.log(RESULT)
    res.json(RESULT.rows)
};

const postProduct= async (req, res)=>{
  
   try {   
   const { id,title , image , price , count , category}=req.body
   const result= await pool.query("INSERT INTO task ( id, title , image , price , count , category) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *", [
    id,
     title, 
     image, 
     price, 
     count, 
     category
    ])
    console.log(result)
    res.send(result.rows[0])
  } catch (error) {
    console.log(error)
  }
   
};
const sumitTicket= async (req, res)=>{
    try {   
        const { name , email , description}=req.body
        const result= await pool.query("INSERT INTO ticket (name , email , description) VALUES ($1,$2,$3) RETURNING *", [
            name,
            email,
            description
         ])
         console.log(result)
         res.send(result.rows[0])
       } catch (error) {
         console.log(error)
       }
};
module.exports={
    getProduct,
    sumitTicket,
    postProduct
}