import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { expect, vi, it, describe, beforeEach } from "vitest";
import RegisterPage from "./page";
import { signup } from "./actions";

// Mock the signup action
vi.mock("./actions", () => ({
  signup: vi.fn(),
}));

describe("RegisterPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders registration form", () => {
    render(<RegisterPage />);
    expect(screen.getByText(/Create Account/i)).toBeDefined();
    expect(screen.getByLabelText(/Full Name/i)).toBeDefined();
    expect(screen.getByLabelText(/Email Address/i)).toBeDefined();
    expect(screen.getByLabelText(/Password/i)).toBeDefined();
    expect(screen.getByRole("button", { name: /Register/i })).toBeDefined();
  });

  it("shows loading state on submission", async () => {
    (signup as any).mockReturnValue(new Promise(() => {})); // Never resolves
    render(<RegisterPage />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    expect(screen.getByRole("button", { name: /Register/i })).toBeDisabled();
  });

  it("shows error message on failed registration", async () => {
    (signup as any).mockResolvedValue({ error: "Email already in use" });
    render(<RegisterPage />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Register/i }));

    await waitFor(() => {
      expect(screen.getByText(/Email already in use/i)).toBeDefined();
    });
  });
});
