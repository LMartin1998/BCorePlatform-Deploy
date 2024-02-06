import { StepperContext } from "@/app/contexts/StepperContext";
import { useContext } from "react";

export default function SelectBlock(){
    const { userData, setUserData } = useContext(StepperContext);
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value});
    };

    return <div className="flex flex-col">Select a block</div>
}