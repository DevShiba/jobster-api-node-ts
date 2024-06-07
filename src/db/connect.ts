import mongoose from "mongoose";

const connect = async(url: string)=>{
    await mongoose.connect(url)
}

export default connect