import { supabase } from "@/app/lib/db";
import {  NextResponse } from "next/server";

export async function POST() {
    try {
        const { data, error } = await supabase.from("homepage_workflow").insert({
            name: "New Workflow",
            description: "Workflow Description"
        }).select("id, name, description, outline, metadata");

        if (error || !data) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ data: data[0] }, { status: 200 });
    }
    catch (error) {
        console.error("Error creating workflow:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}