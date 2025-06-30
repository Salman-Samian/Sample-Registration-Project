import { NextResponse } from "next/server";

export async function GET() {
  try {
    // In a real application, this would come from a database
    const currencies = [
      { value: "USD", label: "US Dollar" },
      { value: "EUR", label: "Euro" },
      { value: "GBP", label: "British Pound" },
      { value: "JPY", label: "Japanese Yen" },
      { value: "CAD", label: "Canadian Dollar" },
      { value: "AUD", label: "Australian Dollar" },
      { value: "CHF", label: "Swiss Franc" },
      { value: "CNY", label: "Chinese Yuan" },
      { value: "INR", label: "Indian Rupee" },
      { value: "BRL", label: "Brazilian Real" },
    ];

    return NextResponse.json(currencies);
  } catch (error) {
    console.error("Error fetching currencies:", error);
    return NextResponse.json(
      { error: "Failed to fetch currencies" },
      { status: 500 }
    );
  }
}
