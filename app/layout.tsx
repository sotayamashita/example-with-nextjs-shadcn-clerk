import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: 'bottom',
          socialButtonsVariant: 'iconButton',
          termsPageUrl: 'https://clerk.com/terms'
        }
      }}
			>
				<html lang="en">
					<body
						className={cn(
							"min-h-screen bg-background font-sans antialiased",
							fontSans.variable,
						)}
					>
						{children}
					</body>
				</html>
			</ClerkProvider>
	);
}
