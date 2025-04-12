/**
 * Utility Functions
 *
 * This file contains utility functions used throughout the application.
 * Currently, it includes:
 *
 * - cn: A utility function that combines multiple class names using clsx and tailwind-merge.
 *   This allows for conditional class application while properly handling Tailwind CSS class conflicts.
 *
 * Example usage:
 *   cn("base-class", condition && "conditional-class", "always-applied-class")
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class values into a single className string
 * Resolves Tailwind CSS conflicts using tailwind-merge
 *
 * @param inputs - Any number of class values (strings, objects, arrays, etc.)
 * @returns A merged className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
