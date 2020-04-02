import {Items} from "../../../data";

export default async(req,res)=>{
    const itemDescription = JSON.parse(req.body).itemDescription;
    await Items.create(itemDescription);
    res.status(200).json(await Items.read());
}