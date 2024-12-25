import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa"

function Icon({name}){
    if(name=="circle"){
        return <FaRegCircle size={50}/>
    }
    else if(name=="cross"){
        return <FaTimes size={60}/>
    }
    else{
        return <FaPen size={40}/>
    }
}

export default Icon;