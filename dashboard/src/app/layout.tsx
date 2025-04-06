import { Poppins } from "next/font/google";
import "./globals.css";
import "../utils/disable-console.ts";

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

/**
 * RootLayout is a functional component that serves as the root layout for the application.
 * It wraps the entire application content and provides a consistent structure for the HTML document.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components or elements to be rendered inside the layout.
 *
 * @returns {JSX.Element} The root layout structure containing the HTML and body elements.
 *
 * @remarks
 * - The `<html>` element is set with the language attribute `lang="en"` for English.
 * - The `<body>` element includes utility classes for styling:
 *   - `poppins.variable`: Presumably applies a custom font or typography style.
 *   - `antialiased`: Ensures smoother font rendering.
 *   - `select-none`: Prevents text selection within the body.
 *
 * @example
 * ```tsx
 * <RootLayout>
 *   <main>
 *     <h1>Welcome to the Dashboard</h1>
 *   </main>
 * </RootLayout>
 * ```
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased select-none`}>
                { children }
            </body>
        </html>
    );
}