import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connect } from "../../../dbConfig/dbConfig";
import User from "../../../models/UserModel";

connect();

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password, roles,permissions } = body;

    // Debugging
    console.log(name, email, password, roles);

    if (
      !name ||
      !email ||
      !password ||
      !roles ||
      !Array.isArray(roles) ||
      roles.length === 0
    ) {
      return new NextResponse("Missing or invalid fields", { status: 400 });
    }

    // Check if the user already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return new NextResponse("Email already exists", { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user data
    const userData = {
      name,
      email,
      password: hashedPassword,
      roles,
      permissions,
    };

    // Save user
    const newUser = new User(userData);
    const savedUser = await newUser.save();

    console.log("User saved:", savedUser);
    return NextResponse.json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error("Error saving user:", error);
    return new NextResponse("Error saving user", { status: 500 });
  }
}
