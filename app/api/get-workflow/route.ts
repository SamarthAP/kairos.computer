import { supabase } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: "Workflow ID is required" }, { status: 400 });
        }

        const { data, error } = await supabase
            .from("homepage_workflow")
            .select("id, name, description, outline, metadata")
            .eq("id", id)
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        if (!data) {
            return NextResponse.json({ error: "Workflow not found" }, { status: 404 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error("Error getting workflow:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}