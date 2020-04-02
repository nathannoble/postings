import {Items} from '../../../data';

export default async (req,res)=>{
    const item = await(Items.get(req.query.id));
    res.status(200).json(item);
}