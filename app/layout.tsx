import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sajid's Blog",
	description: "Create by Sajid",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-slate-800`}>
				<Navbar />
				<MyProfilePic />
				{children}
			</body>
		</html>
	);
}
