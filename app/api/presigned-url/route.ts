import { NextResponse } from "next/server";

const API_URL = process.env.NODE_ENV === "production" ? "https://api.kairos.computer" : "https://api-dev.kairos.computer";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: "Workflow ID is required" }, { status: 400 });
    }

    const response = await fetch(`${API_URL}/core/v1/homepage/workflow/${id}/presigned-url`);

    if (!response.ok) {
        return NextResponse.json({ error: "Failed to get presigned URL" }, { status: 500 });
    }

    const data = await response.json();

    return NextResponse.json({ 
        presigned_url: data.presigned_url,
     }, { status: 200 });
}