import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    // Read the authorization passkey from the headers
    const passkey = req.headers.get("x-admin-passkey");

    if (passkey !== "sarathi2026") {
      return NextResponse.json(
        { error: "Unauthorized. Invalid administrative passkey." },
        { status: 401 }
      );
    }

    // Fetch inquiries ordered by created_at descending
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase select error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ inquiries: data || [] }, { status: 200 });
  } catch (error) {
    console.error("Admin queries handler error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal Server Error" }, { status: 500 });
  }
}
