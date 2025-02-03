"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Doc, Id } from "../../../../convex/_generated/dataModel";
import toast from "react-hot-toast";
import LoaderUI from "@/components/LoadrUI";

type Interview= Doc<"interviews">;

function DashboardPage(){
    const users= useQuery(api.users.getUsers);
    const interviews = useQuery(api.interviews.getAllInterviews);
    const updateStatus = useMutation(api.interviews.updateInterviewStatus);

    const handleStatusUpdate=async (interviewId: Id<"interviews">, status: string)=>{
        try {
            await updateStatus({ id: interviewId, status});
            toast.success(`Interview marked as ${status}`);
        } catch (error) {
            toast.error("Failed to update status");
        }
    }

    if(!interviews || !users) return <LoaderUI/>

    return(
        <div>
            Dashboard
        </div>
    )

}

export default DashboardPage;