"use client";
import Stepper from "@/app/components/Stepper";
import Header from "../../components/Header";
import TopCards from "../../components/TopCards";
import StepperControl from "@/app/components/StepperControl";
import SelectBlock from "@/app/components/steps/SelectBlock";
import TaskInfo from "@/app/components/steps/TaskInfo";
import { useState } from "react";

export default function Reports() {
    const [currentStep, setCurrentStep] = useState(1);
    
    const steps = [
        "Block",
        "Task",
        "Resume"
    ];

    const displayStep = (step) => {
        switch(step) {
            case 1:
                return <SelectBlock></SelectBlock>
            case 2: 
                return <TaskInfo></TaskInfo>
            case 3:
                return <Resume></Resume>
            default:
        }
    }
    
    return (
        <main className="bg-gray-100 min-h-screen">
            <Header></Header>
            <TopCards></TopCards>
            <div className="p-4">
                <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
                    <div className="container horizontal mt-5">
                        <Stepper
                            steps = {steps}
                            currentStep = {currentStep}
                        ></Stepper>
                    </div>
                    <StepperControl></StepperControl>
                </div>
            </div>
        </main>
    );
}
