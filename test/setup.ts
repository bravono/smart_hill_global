import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock Supabase environment variables
process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "example-anon-key";

// Mock window.location
Object.defineProperty(window, "location", {
  value: {
    href: "",
    assign: vi.fn(),
  },
  writable: true,
});
