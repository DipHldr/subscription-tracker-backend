import mongoose from'mongoose';
import {DB_URI,NODE_ENV} from '../config/env.js';

if(!DB_URI){
    throw new Error("DB connection string not found")
}

const connectToDatabase = async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log(`connected to database in ${NODE_ENV} mode`)
    }
    catch(error){
        console.error("Error connectiong to database: ",error)

        process.exit(1)
    }
}

export default connectToDatabase