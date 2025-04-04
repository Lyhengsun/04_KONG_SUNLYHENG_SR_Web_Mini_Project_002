import "./globals.css";
import { Roboto } from "next/font/google";
import { Provider } from "@/context/provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className + "text-charcoal"}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
