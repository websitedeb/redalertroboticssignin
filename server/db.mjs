import mongoose from "mongoose";
import { join } from "path";
import { config } from "dotenv";

config({ path: join(process.cwd(), "/server/.env") });

const timeSchema = new mongoose.Schema({
  time: Date,
  direction: String
});

const personSchema = new mongoose.Schema({
  name: String,
  time: [timeSchema],
});

export class DB {
  constructor() {
    mongoose
      .connect(process.env.URI)
      .then(() => {})
      .catch((err) => {
        console.error("Database connection error:", err);
        process.exit(1); 
      });

    this.People = mongoose.model("People", personSchema);
  }

  add(nam, tim, ratio) {
    const newTime = { time: new Date(tim), direction: ratio };

    return this.People.findOneAndUpdate(
      { name: nam }, 
      { $push: { time: newTime } }, 
      { upsert: true, new: true }
    )
      .then((person) => {
        return person;
      })
      .catch((err) => {
        console.error("Error adding or updating person:", err);
        throw err;
      });
  }
}
