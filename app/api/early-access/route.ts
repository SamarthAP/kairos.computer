import { NextRequest } from "next/server";
import { supabase } from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const headers = req.headers;
  const ip = headers.get("x-forwarded-for") ?? "IP Not Found";
  const city = headers.get("x-vercel-ip-city") ?? "City Not Found";
  const country = headers.get("x-vercel-ip-country") ?? "Country Not Found";
  const region = headers.get("x-vercel-ip-country-region") ?? "Region Not Found";
  const lat = headers.get("x-vercel-ip-latitude") ?? "Lat Not Found";
  const lon = headers.get("x-vercel-ip-longitude") ?? "Lon Not Found";

  const { email, usage } = await req.json();

  console.log("Early Access Request:");
  console.log(`  Email: ${email}`);
  console.log(`  Usage: ${usage}`);
  console.log(`  IP: ${ip}`);
  console.log(`  Location: ${city}, ${region}, ${country}`);
  console.log(`  Coordinates: ${lat}, ${lon}`);


  const metadata = {
    ip,
    city,
    location: `${city}, ${region}, ${country}`,
    coordinates: `${lat}, ${lon}`,
  };

  try {
    const { data, error } = await supabase.from("signups").insert({
      email,
      use_case: usage,
      metadata,
    });

    if (error) {
      console.error("Error inserting early access request:", error);
    }

    if (data) {
      console.log("Early access request inserted successfully:", data);
    }
  } catch (error) {
    console.error("Error inserting early access request:", error);
  }

  return new Response("Email received", { status: 200 });
}
