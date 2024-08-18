/**
 * @fileoverview
 * Function to merge and optimize class names
 *
 * @module cn
 * @file app/lib/utils.ts
 * @param {...ClassValue[]} inputs - Class names to merge (strings, objects, or arrays)
 * @returns {string} Optimized merged class names
 *
 * @example
 * cn('px-2', 'py-1', { 'bg-red-500': isError }, ['text-white', 'font-bold'])
 * // Result: "px-2 py-1 bg-red-500 text-white font-bold"
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
