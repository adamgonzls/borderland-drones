const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LeadSchema = new Schema({
  contact_name: String,
  location_address_1: String,
  location_address_2: String,
  location_city: String,
  location_state: String,
  location_zip: String,
  request_summary: String,
  request_details: String,
  status: String,
})

module.exports = mongoose.model('Lead', LeadSchema)
