import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa"
import { GiLion, GiTigerHead } from "react-icons/gi";
import { MdHourglassEmpty } from "react-icons/md";

function Icon({name}){
    if(name=="circle"){
        return <GiLion size={50}/>
    }
    else if(name=="cross"){
        return <GiTigerHead size={60}/>
    }
    else{
        return <MdHourglassEmpty size={40}/>
    }
}

export default Icon;