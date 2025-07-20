import { render, screen, fireEvent } from "@testing-library/react";
import { RecurrenceProvider } from "../context/Context";
import DatePicker from "../components/DatePicker";

function renderWithProvider(ui) {
  return render(<RecurrenceProvider>{ui}</RecurrenceProvider>);
}

describe("RecurringDatePicker Integration Test", () => {
  test("renders component and selects recurrence type", () => {
    renderWithProvider(<DatePicker />);

    expect(screen.getByText(/Date Picker/i)).toBeInTheDocument();

    // Click Weekly button
    const weeklyBtn = screen.getByText("weekly");
    fireEvent.click(weeklyBtn);

    // Check if weekly is selected
    expect(weeklyBtn).toHaveClass("bg-blue-600");
  });

  test("updates interval value", () => {
    renderWithProvider(<DatePicker />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 3 } });
    expect(input.value).toBe("3");
  });
});
