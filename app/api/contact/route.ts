import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const MAX_LEN = 5000;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, needs, message } = (body ?? {}) as {
    name?: unknown;
    email?: unknown;
    needs?: unknown;
    message?: unknown;
  };

  if (typeof name !== "string" || !name.trim())
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  if (typeof email !== "string" || !EMAIL_RE.test(email))
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  if (
    !Array.isArray(needs) ||
    needs.length === 0 ||
    needs.some((n) => typeof n !== "string")
  )
    return NextResponse.json(
      { error: "At least one need must be selected." },
      { status: 400 }
    );
  if (typeof message !== "string" || !message.trim())
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  if (
    name.length > MAX_LEN ||
    email.length > MAX_LEN ||
    message.length > MAX_LEN
  )
    return NextResponse.json({ error: "Field too long." }, { status: 400 });

  try {
    const submission = await prisma.submission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        needs: JSON.stringify(needs),
        message: message.trim(),
      },
      select: { id: true },
    });
    return NextResponse.json({ ok: true, id: submission.id });
  } catch (err) {
    console.error("[/api/contact] insert failed:", err);
    return NextResponse.json(
      { error: "Could not save your message. Please try again." },
      { status: 500 }
    );
  }
}
