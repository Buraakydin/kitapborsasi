import { 
  type User, 
  type InsertUser, 
  type BookListing, 
  type InsertBookListing,
  users,
  bookListings 
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, ilike, or, and, sql } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBookListings(university?: string, search?: string): Promise<BookListing[]>;
  getBookListing(id: string): Promise<BookListing | undefined>;
  createBookListing(listing: InsertBookListing): Promise<BookListing>;
  deleteBookListing(id: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getBookListings(university?: string, search?: string): Promise<BookListing[]> {
    let conditions = [];

    if (university && university !== "Tüm Üniversiteler") {
      conditions.push(eq(bookListings.university, university));
    }

    if (search) {
      conditions.push(
        or(
          ilike(bookListings.title, `%${search}%`),
          ilike(bookListings.author, `%${search}%`)
        )
      );
    }

    if (conditions.length > 0) {
      return await db
        .select()
        .from(bookListings)
        .where(and(...conditions))
        .orderBy(desc(bookListings.createdAt));
    }

    return await db
      .select()
      .from(bookListings)
      .orderBy(desc(bookListings.createdAt));
  }

  async getBookListing(id: string): Promise<BookListing | undefined> {
    const [listing] = await db
      .select()
      .from(bookListings)
      .where(eq(bookListings.id, id));
    return listing;
  }

  async createBookListing(listing: InsertBookListing): Promise<BookListing> {
    const [created] = await db
      .insert(bookListings)
      .values(listing)
      .returning();
    return created;
  }

  async deleteBookListing(id: string): Promise<void> {
    await db.delete(bookListings).where(eq(bookListings.id, id));
  }
}

export const storage = new DatabaseStorage();
