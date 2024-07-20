import {NextIntlClientProvider} from 'next-intl';
import clsx from 'clsx';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import { Inter,Roboto_Condensed } from 'next/font/google';
import {ReactNode} from 'react';
//import Navigation from '@/components/Navigation';
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Newsletter from "@/app/components/Newsletter";
//import { Footer00 } from "./components/Footer";
import "./globals.css";
import InfoBar from "@/app/components/InfoBar"
import ScrollToTop from "@/app/components/BackToTop/ScrollToTop";
import {locales} from '@/config';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    
    <section className="h-full" lang={locale}>
      <div className={clsx(inter.className, 'flex min-h-screen flex-col antialisased')}>
     
      <InfoBar/>
      <Navigation/>
        <NextIntlClientProvider messages={messages}>
       
        
          {children}
        </NextIntlClientProvider>
        <Newsletter/>
        <ScrollToTop/>
        </div>
        
        <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
    </section>
    
  );
  }

{/*}
export const metadata: Metadata = {
  metadataBase: new URL("https://clerk-next-app.vercel.app/"),
  title: "Next.js Clerk Template",
  description:
    "A simple and powerful Next.js template featuring authentication and user management powered by Clerk.",
  openGraph: { images: ["/assets/images/LogoEZ990.svg"] },
};


const imagePath: string = "/public/assets/images/LogoEZ990.svg";
const brandName: string = "8zense.com"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${Inter.variable} ${Roboto.variable}`}>
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: "#000000" },
          elements: {
            formButtonPrimary:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            socialButtonsBlockButton:
              "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
            socialButtonsBlockButtonText: "font-semibold",
            formButtonReset:
              "bg-red-900 border border-solid border-gray-900 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
            membersPageInviteButton:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            card: "bg-[#fafafa]",
          },
        }}
      >
        <body className={`min-h-screen flex flex-col antialiased `}>
          <InfoBar/>
          <div>
      <Navigation/>
    </div>
          {children}
          <Newsletter />
          <ScrollToTop />
          
        </body>
      </ClerkProvider>

      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
    </html>
  );
}
*/}