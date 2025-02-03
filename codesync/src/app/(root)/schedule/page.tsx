"use client";
import LoaderUI from "@/components/LoadrUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";


function SchedulePage(){
    const router=useRouter();

    const { isInterviwer, isLoading}=useUserRole();

    if(isLoading) return <LoaderUI/>;
    if(!isInterviwer) return router.push("/");

    return(
        <InterviewScheduleUI />
    )
}

export default SchedulePage;