import {useState} from "react";
import {useRouter, Router} from 'next/router';

function NewItem(){
    const router = useRouter()
    const [itemDescription, setItemDescription] = useState('');

    const handleSubmit = async(event)=>{
        event.preventDefault();

        await fetch("/api/items/new",{
            method:"POST",
            body:JSON.stringify({itemDescription})
        })

        router.push('/items')
    }

    return <form onSubmit={handleSubmit}>
        <textarea name="item-description" value={itemDescription}
            onChange={e=>setItemDescription(e.target.value)}/>

        <input type="submit"/>
    </form>

}

export default NewItem;