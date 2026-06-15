import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { expect, vi, it, describe, beforeEach } from "vitest";
import LoginPage from "./page";
import { login } from "./actions";

// Mock the login action
vi.mock("./actions", () => ({
  login: vi.fn(),
}));

describe("LoginPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders login form", () => {
    render(<LoginPage />);
    expect(screen.getByText(/Welcome back/i)).toBeDefined();
    expect(screen.getByLabelText(/Email Address/i)).toBeDefined();
    expect(screen.getByLabelText(/Password/i)).toBeDefined();
    expect(screen.getByRole("button", { name: /Sign In/i })).toBeDefined();
  });

  it("shows loading state on submission", async () => {
    (login as any).mockReturnValue(new Promise(() => {})); // Never resolves
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Sign In/i }));

    expect(screen.getByRole("button", { name: /Sign In/i })).toBeDisabled();
  });

  it("shows error message on failed login", async () => {
    (login as any).mockResolvedValue({ error: "Invalid credentials" });
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "wrongpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Sign In/i }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid credentials/i)).toBeDefined();
    });
  });
});
