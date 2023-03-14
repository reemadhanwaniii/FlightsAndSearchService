const { FlightService } = require("../services/index.js");
const flightService = new FlightService();

const create = async (req,res) => {
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success: true,
            message : "Successfully created a flight",
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Failed to create a flight",
            err : error
        });
    }
}



const get = async (req,res) => {
    try{
        const response = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data : response,
            success: true,
            message : "Successfully fetched a flight",
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Failed to fetched a flight",
            err : error
        });
    }
}


const getAll = async (req,res) => {
    try{
        const response = await flightService.getAllFlights(req.query);
        return res.status(201).json({
            data : response,
            success: true,
            message : "Successfully fetched  flights",
            err : {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Failed to fetched  flights",
            err : error
        });
    }
}

module.exports = {
    create,
    getAll,
    get
}