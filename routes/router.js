import express from 'express';
import timeStories from '../model/timeStories.js';

const router = express.Router()

router.get('/getTimeStories',async(req,res)=>{
    try {
        const data = await timeStories.find()

        const result = JSON.stringify(data.reverse().slice(0,6))

        res.status(202).send(result)
    } catch (error) {
        res.status(404).json(error)
    }
})



router.post('/getTimeStories',async(req,res)=>{
   const newStory = new timeStories(req.body);
    try {
        await newStory.save()

        res.status(200).json(newStory)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.delete('/getTimeStories/:id',async(req,res)=>{
    const {id:_id} = req.params
     try {
         await timeStories.findByIdAndDelete(_id)
 
         res.status(200).json(`id= ${_id} of story deleted successfully`)
     } catch (error) {
         res.status(404).json(error)
     }
 })


export default router