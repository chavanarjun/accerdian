import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface EnquiryData {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  mode: string;
  location: string;
  message: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "enquiries.json");

async function readEnquiries(): Promise<EnquiryData[]> {
  try {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeEnquiries(data: EnquiryData[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    const required = ["name", "email", "phone", "company", "domain"];
    for (const field of required) {
      if (!body[field] || body[field].toString().trim() === "") {
        return NextResponse.json(
          { error: `Field '${field}' is required.` },
          { status: 400 }
        );
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const enquiry: EnquiryData = {
      id: `ENQ-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      company: body.company.trim(),
      domain: body.domain.trim(),
      candidates: body.candidates?.trim() || "",
      mode: body.mode?.trim() || "",
      location: body.location?.trim() || "",
      message: body.message?.trim() || "",
    };

    const existing = await readEnquiries();
    existing.push(enquiry);
    await writeEnquiries(existing);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received! We will reach out within 24 hours.",
        id: enquiry.id,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple health check / list endpoint (for admin verification)
  try {
    const data = await readEnquiries();
    return NextResponse.json({ count: data.length, enquiries: data });
  } catch {
    return NextResponse.json({ count: 0, enquiries: [] });
  }
}
