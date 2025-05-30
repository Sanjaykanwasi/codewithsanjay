import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/kanwasi`, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://localhost:27017/kanwasi", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true, // Recommended to avoid warnings
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://localhost:27017/kanwasi");
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
