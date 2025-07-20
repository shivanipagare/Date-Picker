import { RecurrenceProvider } from "@/context/Context";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RecurrenceProvider>{children}</RecurrenceProvider>
      </body>
    </html>
  );
}
