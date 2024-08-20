import { Open_Sans } from "next/font/google";

export const openSans = Open_Sans({
  subsets: [
    "latin",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "hebrew",
    "latin",
    "latin-ext",
    "math",
    "symbols",
    "vietnamese",
  ],
});

export const metadata = {
  title: "Ketan-brothers",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}