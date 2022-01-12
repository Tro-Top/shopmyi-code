import { Database } from "firebase-admin/lib/database/database";
import { initializeApp, credential } from "firebase-admin";

const serviceAccount = require("../config/serviceAccountKey.json");

export const connectDatabase = async (): Promise<Database> => {
  const fb = await initializeApp({
    credential: credential.cert(serviceAccount),
    databaseURL: "https://test-technique-a5ac7.firebaseio.com",
  });
  const db = fb.database();
  return db;
};
