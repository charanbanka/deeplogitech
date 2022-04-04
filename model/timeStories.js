import mongoose from 'mongoose';

const timestories = mongoose.Schema({
    title: {type:String,required:true},
    link : {type:String,required:true}
},
{timestamps:true}
)

export default mongoose.model('timeStories',timestories)