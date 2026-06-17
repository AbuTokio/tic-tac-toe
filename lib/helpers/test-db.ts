import Database from "better-sqlite3";
import { applySchema, type DB } from "@/lib/db/client";

// Fresh in-memory database with the full schema applied, for unit tests.
export function makeTestDb(): DB {
  const db = new Database(":memory:")
  applySchema(db)
  return db
}