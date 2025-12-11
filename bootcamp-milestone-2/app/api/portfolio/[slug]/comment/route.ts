import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const body = await req.json();
    const { user, comment } = body;

    if (!user || !comment) {
      return NextResponse.json(
        { error: "User and comment are required." },
        { status: 400 }
      );
    }

    const project = await projectSchema
      .findOneAndUpdate(
        { slug },
        {
          $push: {
            comments: {
              user,
              comment,
              time: new Date(),
            },
          },
        },
        { new: true }
      )
      .orFail();

    return NextResponse.json(project, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to add comment or project not found." },
      { status: 404 }
    );
  }
}
