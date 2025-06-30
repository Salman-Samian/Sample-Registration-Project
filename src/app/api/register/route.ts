import { NextRequest, NextResponse } from "next/server";
import { registrationSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = registrationSchema.parse(body);

    // In a real application, you would save this data to a database
    console.log("Registration data received:", validatedData);

    // Simulate some processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        data: {
          id: Math.random().toString(36).substr(2, 9),
          ...validatedData,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    // Return validation error
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed",
        errors: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 }
    );
  }
}
