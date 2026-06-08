export const metadata = {
  title: "MonBailleurBF",
  description: "Plateforme immobilière du Burkina Faso"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
