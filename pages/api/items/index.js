import {Items} from "../../../data"

export default async (req,res)=>{
    res.status(200).json(await Items.read());
}