import {Items} from "../../../data"

export default async (req,res)=>{
    //console.log(req.headers);
    res.status(200).json(await Items.read());
}