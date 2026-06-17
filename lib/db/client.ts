import Database from "better-sqlite3"
import { mkdirSync, readFileSync } from "node:fs"
import path from "node:path"

export type DB = Database.Database;

const SCHEMA_PATH = path.join(process.cwd(), "lib", "db", "schema.sql")

// Enable FK enforcement (per connection) and create tables/views if missing.
export function applySchema(db: DB): void {
  db.pragma("foreign_keys = ON")
  db.exec(readFileSync(SCHEMA_PATH, "utf-8"))
}

let singleton: DB | null = null;

// Shared connection for the running app (better-sqlite3 is synchronous).
export function getDb(): DB {
  if (singleton) return singleton
  const file = path.join(process.cwd(), "data", "app.db")
  mkdirSync(path.dirname(file), { recursive: true })
  singleton = new Database(file)
  applySchema(singleton)
  return singleton
}