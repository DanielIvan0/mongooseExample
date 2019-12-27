const express = require('express');
const router  = express.Router();
const myCollection = require('../models/MyCollection')
const debug = (str, n) => {
  console.log(`This is the value: ${str} at the line: ${n}`)
}
/* GET home page */
router.get('/', async (req, res, next) => {
  const data = await myCollection.find()
  //debug(data, 10)
  res.render('index', {data});
});
router.post('/', async (req, res, next) => {
  const {
    name,
    lastName,
    updateName,
    updateLastName,
    addRecord,
    deleteRecord,
    updateRecord
  } = req.body
  try{
    if(addRecord === 'Add'){
      await myCollection.create({name, lastName})
    }else if(deleteRecord === 'Delete'){
      await myCollection.findOneAndDelete({name, lastName})
    }else if(updateRecord === 'Update'){
      console.log("Entra")
      await myCollection.findOneAndUpdate({name, lastName}, {'name':updateName, 'lastName':updateLastName})
    }else{
      res.render('index', {msg:'Something was wrong! D:'})
    }
  }catch (err){
    console.log(err)
    res.render('index', {msg:'Something was wrong! D:'})
  }
  res.redirect('/')
})

module.exports = router;
