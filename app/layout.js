import "./globals.css";
import Nav from "@/components/Nav";
import Transition from "@/components/Transition";
import Header from "@/components/Header";
import { Sora } from "next/font/google";
 
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className={`page bg-black text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        <Transition>
        <Header />
        <Nav/>
            {children}
        </Transition>
          </div>
      </body>
    </html>
  );
}
