const express = require("express") ;
const app = express() ;

const MensRanking = require("../models/mens") ;
const router = new express.Router() ;
app.use(express.json()) ;

router.post('/mens' , async  (req, res) => {
      try {
         const menData = new MensRanking(req.body);
          const result = await menData.save() ;
         res.send(result);
      }
      catch(e) {
         res.send(e) ;
       }
}) ;
router.get('/mens/:id' , async  (req, res) => {
   try {
      const _id = req.params.id;
      const getMen = await MensRanking.findById(_id) ;
      res.send(getMen) ;
   }
   catch(e) {
      res.send(e) ;
    }
}) ;
router.patch('/mens/:id' , async  (req, res) => {
   try {
      const _id = req.params.id;
      const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {new : true}) ;
      res.send(updateMen) ;
   }
   catch(e) {
      res.send(e) ;
    }
}) ;
router.delete('/mens/:id' , async  (req, res) => {
   try {
      const _id = req.params.id;
      const deleteMen = await MensRanking.findByIdAndDelete(_id,{new : true}) ;
      res.send(deleteMen) ;
   }
   catch(e) {
      res.send(e) ;
    }
}) ;

app.use(router) ;

 module.exports = router ;