const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const driverSchema = new Schema({
    name: { type: String, required:true },
    email: {type: String, required: true, unique: true},
    password:{type: String,required:true},
    cellNumber:{type:String,required:true,unique:true},
    status:{type:Boolean,default:true}
});

const Driver = mongoose.model('Driver', driverSchema);

const passengerSchema = new Schema({
    name: { type: String, required:true},
    email: {type: String, required: true, unique: true},
    password:{type: String,unique:true},
    cellNumber:{type:String,required:true,unique:true},

});

const Passenger = mongoose.model('Passenger',passengerSchema);

const vehicleSchema = new Schema({
    driverId: {type: Schema.Types.ObjectId, ref: 'Driver',required:true, unique:true},
    vehicleRegNo: {type: String, required:true, unique: true},
    make: {type:String,required:true},
    model:{type:String,required: true},
    colour:{type: String, required: true},

});

const Vehicle = mongoose.model('Vehicle',vehicleSchema);

const rideSchema = new Schema({
    vehicleRegNum:{type: String, required:true},
    passanger_Id:{type:Schema.Types.ObjectId, ref:'Passenger',required:true},
    driver_Id:{type:Schema.Types.ObjectId,ref:'Driver',required:true},
    vehicleRegNo: {type: String, required: true, unique: true},
    rideStart:{type:Date},
    rideEnd:{type:Date},
    pickup:{type:String, required:true},
    destination:{type:String, required:true}
});

const Ride = mongoose.model('Ride',rideSchema);

module.exports = {Driver, Passenger, Vehicle, Ride};