// the method we write here is to get the past  generations for a user.
import {and, count, desc, eq ,gte, type InferInsertModel } from "drizzle-orm";
import {generations} from "./schema";
import {db} from "./index";

// start of current month in UTC , used for monthly generation quotes
export function utcMonthStart(){
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1,0,0,0,0));
}

// this method counts the number of generations a user has made since a given date (used for enforcing monthly generation limits)
export async function countGenerationsSince(clerkUserId: string, since: Date) {
    const [row]= await db.select({
        count: count()
    }).from(generations).where(
        and(
            eq(generations.clerkUserId, clerkUserId),
            gte(generations.createdAt, since)
        )
    ).orderBy(desc(generations.createdAt));
    return Number(row?.count ?? 0);

}

//
//
export async function listUserGenerations(clerkUserId: string){
    return await db.select().from(generations).where(
        eq(generations.clerkUserId, clerkUserId)
    ).orderBy(desc(generations.createdAt));
} 

export async function createGeneration(generation: InferInsertModel<typeof generations>){
    const [created] = await db.insert(generations).values(generation).returning();
    return created;
}