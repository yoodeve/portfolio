import "./globals.css";
import { Orbit } from "next/font/google";

const orbit = Orbit({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--roboto",
});

export const metadata = {
  title: "한유정의 페이지입니다.",
  description: "한유정의 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbit.className}>{children}</body>
    </html>
  );
}
