import { NextResponse } from "next/server";

export async function GET() {
  try {
    // In a real application, this would come from a database
    const regions = [
      { value: "NA", label: "North America" },
      { value: "EU", label: "Europe" },
      { value: "AS", label: "Asia" },
      { value: "AF", label: "Africa" },
      { value: "SA", label: "South America" },
      { value: "OC", label: "Oceania" },
      { value: "ME", label: "Middle East" },
    ];

    return NextResponse.json(regions);
  } catch (error) {
    console.error("Error fetching regions:", error);
    return NextResponse.json(
      { error: "Failed to fetch regions" },
      { status: 500 }
    );
  }
}
