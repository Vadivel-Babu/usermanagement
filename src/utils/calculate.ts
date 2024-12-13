//@ts-nocheck
import { User } from "../types/user";

export const calculateUserRegistrations = (
  users: User[]
): { month: string; count: number }[] => {
  // Step 1: Parse dates and get current date
  const today = new Date();
  const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 5, 1); // Start of the month 6 months ago

  // Step 2: Prepare a map for month counts
  const monthCounts = new Map<string, number>();

  for (let i = 0; i < 6; i++) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1); // Start of each month in range
    const monthKey = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    monthCounts.set(monthKey, 0); // Initialize count
  }

  // Step 3: Parse user dates and count registrations in the past 6 months
  users.forEach((user) => {
    const [day, month, year] = user?.date?.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    if (date >= sixMonthsAgo && date <= today) {
      const monthKey = date.toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
      monthCounts.set(monthKey, (monthCounts.get(monthKey) || 0) + 1);
    }
  });

  // Step 4: Convert map to sorted array
  const result = Array.from(monthCounts.entries())
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => new Date(b.month).getTime() - new Date(a.month).getTime()); // Sort by date

  return result;
};
