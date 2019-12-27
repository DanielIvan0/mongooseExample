//Primer cosa => Deconstrucción
const {Schema, model} = require('mongoose')
const mycollectionSchema = new Schema({
    name: String,
    lastName: String
  },{
    versionKey: false,
    timestamps: true
  }
)
//Segunda cosa =>
module.exports = model('Mycollection', mycollectionSchema, 'mycollection')