// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "@/db/db";

export default async function handler(req, res) {
  try {
    if (req.type === "POST") {
      let { db } = await connectToDatabase();
      console.log(req.body);
      let collection = db.collection("munashid");
      const doc = { ...req.body };
      doc.timestamp = Date.now();
      await collection.insertOne(doc);
      res.status(200).json({ result: "Ok" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ result: "Not ok" });
  }
}
