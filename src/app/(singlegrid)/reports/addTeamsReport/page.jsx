"use client";
import { useState } from "react";
//Imports of components
import Header from "@/app/components/Header";
import Stepper from "@/app/components/stepper/Stepper";
//Imports of Steppers
import SelectTeam from "@/app/components/steps/teamsReports/SelectTeam";
import TaskInfo from "@/app/components/steps/blockReports/TaskInfo";
import ResumeTeams from "@/app/components/steps/teamsReports/ResumeTeams";
import CompleteForm from "@/app/components/steps/blockReports/CompleteForm";

import { StepperProvider } from "@/app/contexts/StepperContext";
import StepperControl from "@/app/components/stepper/stepperControls/StepperControl";

const ReportsTeams = () => {
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "Team",
        "Resume",
        "Complete"
    ];

    const displayStep = (step) => {
        switch(step) {
            case 1:
                return <SelectTeam></SelectTeam>
            case 2:
                return <ResumeTeams></ResumeTeams>
            case 3:
                return <CompleteForm></CompleteForm>
            // case 2: 
            //     return <TaskInfo></TaskInfo>
            default:
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;
        // if (currentStep === 1 && !hasSelectedBlocks) {
        //     return; 
        // }
        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

    return ( 
        <main className="bg-gray-100 min-h-screen dark:bg-[#1A202C]">
            <Header></Header>
            <div className="p-4">
                <div className="md:w-3/4 mx-auto rounded-2xl pb-2 bg-white dark:bg-[#1F2733]">
                    <div className="container horizontal mt-5">
                        <Stepper
                            steps = {steps}
                            currentStep = {currentStep}
                        >
                        </Stepper>
                        <div className="my-5 p-10 border-t border-gray-300">
                            <StepperProvider value={{
                                userData,
                                setUserData,
                                finalData,
                                setFinalData
                            }}>
                                {displayStep(currentStep)}
                            </StepperProvider>
                        </div>
                    </div>
                    {currentStep != steps.length && 
                    <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps = {steps}
                    >
                    </StepperControl>
                    }
                </div>
            </div>
        </main>
    );
}
 
export default ReportsTeams;