import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, industry, product, message } = body;

    // Validate inputs
    if (!name || !company || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, company, email, phone, and message are mandatory." },
        { status: 400 }
      );
    }

    // Insert record in Supabase
    const { data, error } = await supabase
      .from("inquiries")
      .insert([
        {
          name,
          company,
          email,
          phone,
          industry: industry || "Ceramics",
          product: product || "China Clay",
          message,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: data?.[0] }, { status: 201 });
  } catch (error) {
    console.error("Inquiry handler error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Internal Server Error" }, { status: 500 });
  }
}
