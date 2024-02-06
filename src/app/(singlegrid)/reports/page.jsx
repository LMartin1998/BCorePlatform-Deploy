"use client";
import Stepper from "@/app/components/Stepper";
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import StepperControl from "@/app/components/StepperControl";
import SelectBlock from "@/app/components/steps/SelectBlock";
import TaskInfo from "@/app/components/steps/TaskInfo";
import Resume from "@/app/components/steps/Resume";
import CompleteForm from "@/app/components/steps/CompleteForm";
import { useState } from "react";

import { StepperContext } from "@/app/contexts/StepperContext"; 

export default function Reports() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    
    const steps = [
        "Block",
        "Task",
        "Resume",
        "Complete"
    ];

    const displayStep = (step) => {
        switch(step) {
            case 1:
                return <SelectBlock></SelectBlock>
            case 2: 
                return <TaskInfo></TaskInfo>
            case 3:
                return <Resume></Resume>
            case 4:
                return <CompleteForm></CompleteForm>
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }
      
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header></Header>
            <TopCards></TopCards>
            <div className="p-4">
                <div className="md:w-1/2 mx-auto rounded-2xl pb-2 bg-white">
                    <div className="container horizontal mt-5">
                        <Stepper
                            steps = {steps}
                            currentStep = {currentStep}
                        />
                        {/* Display components */}
                        <div className="my-10 p-10 border-t border-gray-300">
                            <StepperContext.Provider value={{
                                userData,
                                setUserData,
                                finalData,
                                setFinalData
                            }}>
                                {displayStep(currentStep)}
                            </StepperContext.Provider>
                        </div>
                    </div>
                    {currentStep != steps.length && 
                    <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps = {steps}
                    ></StepperControl>
                    }
                </div>
            </div>
        </main>
    );
}
