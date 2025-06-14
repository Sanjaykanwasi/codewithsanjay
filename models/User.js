// import mongoose, { model } from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   profilepic: {
//     type: String,
//   },
//   coverpic: {
//     type: String,
//   },
//   razorpayid: {
//     type: String,
//   },
//   razorpaysecret: {
//     type: String,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.User || model("User", userSchema);

import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true, // This links to Clerk's user ID
  },
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilepic: {
    type: String,
  },
  coverpic: {
    type: String,
  },
  razorpayid: {
    type: String,
  },
  razorpaysecret: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || model("User", userSchema);
