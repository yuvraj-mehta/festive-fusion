import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  savedFestivals: mongoose.Types.ObjectId[];
  plannedVisits: {
    festivalId: mongoose.Types.ObjectId;
    visitDate: Date;
    status: "planned" | "completed" | "cancelled";
    notes?: string;
  }[];
  preferences: {
    categories: string[];
    regions: string[];
  };
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    savedFestivals: [
      {
        type: Schema.Types.ObjectId,
        ref: "Festival",
      },
    ],
    plannedVisits: [
      {
        festivalId: {
          type: Schema.Types.ObjectId,
          ref: "Festival",
          required: true,
        },
        visitDate: {
          type: Date,
          required: true,
        },
        status: {
          type: String,
          enum: ["planned", "completed", "cancelled"],
          default: "planned",
        },
        notes: String,
      },
    ],
    preferences: {
      categories: [String],
      regions: [String],
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model<IUser>("User", userSchema);
