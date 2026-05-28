import "server-only";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.POSTGRES_URL!);

export type User = {
  id: number;
  username: string;
  password_hash: string;
  created_at: Date;
};

export async function getUserByUsername(username: string): Promise<User | null> {
  const rows = await sql`
    SELECT id, username, password_hash, created_at
    FROM users
    WHERE username = ${username}
    LIMIT 1
  `;
  return (rows[0] as User) ?? null;
}

export async function createUser(
  username: string,
  passwordHash: string
): Promise<User> {
  const rows = await sql`
    INSERT INTO users (username, password_hash)
    VALUES (${username}, ${passwordHash})
    RETURNING id, username, password_hash, created_at
  `;
  return rows[0] as User;
}
