import '../styles/index.css';
const APP_NAME = "Invest In Dubai";
const APP_DESCRIPTION =
  "Where visionary investments meet infinite possibilities in the world's most dynamic financial hub.";
const APP_URL = "https://https://invest-dubai.vercel.app";
const APP_IMAGE = `${APP_URL}/images/dubai-skyline.png`;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
export const metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    'Invest In Dubai',
    'Dubai',
    'Luxury Villas',
    'Waterfront Residences',
    'Townhouses',
    'Villas',
    'Hotel Apartment',
    'Commercial Properties',
    'Real Estate Dubai',
  ],
  applicationName: APP_NAME,
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: APP_URL,
    siteName: APP_NAME,
    images: [{ url: APP_IMAGE, width: 1200, height: 630, alt: APP_NAME }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [APP_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: APP_URL,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navigation/> */}
        {children}
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fujwalsap8550back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.6"
        ></script>
      </body>
    </html>
  );
}
