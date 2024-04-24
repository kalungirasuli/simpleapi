const express= require('express');
const app = express();
const port = 3000;
const router=express.Router();
const bodyparser=require('body-parser');
const cors=require('cors');


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

router.get('/',(req,res)=>{
    res.status(200).json({message:'Hello World'});
});
router.post('/apipost',(req,res)=>{
    res.status(200).json({message:'Post API'});
});
router.put('/apiput',(req,res)=>{
    res.status(200).json({message:'Put API'});
});
router.delete('/apidelete',(req,res)=>{
    res.status(200).json({message:'Delete API'});
});


app.use('/',router);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});