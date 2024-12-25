import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import pizza from "../assets/Images/pizza5.webp"

function PopupComponent(){
    const [isVisible,setIsVisible]=useState(false);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            setIsVisible(true);
        },2000);

        return ()=>clearTimeout(timer);
    },[])

    const closePopup=()=>{
        setIsVisible(false);
    }

    return(
            isVisible && (
                <div className="z-40 fixed inset-0 px-5 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justidy-center items-center">
                        {/* <img src={pizza} width={35} height={35} md:width={40} md:height={40} alt="Pizza Logo" /> */}
                        <p className="mb-[2px] text-lg font-bold text-[#008080]">Tic-Tac-Toe</p>
                        <p className="text-green-800">Developed by <span className="font-medium text-green-900">Nithin Reddy</span></p>
                        <div className="flex gap-3">

                            <button
                                onClick={closePopup}
                                className="mt-4 px-2 bg-amber-500 text-white rounded focus:bg-amber-600 hover:bg-amber-600"
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            )  
    )
}

export default PopupComponent;