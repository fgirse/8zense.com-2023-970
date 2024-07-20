import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import {ReactNode} from 'react';
import './styles.css';


export const metadata: Metadata = {

  title: '8zenSe.com',

  description: 'LandingPage for startup, Interiore Design, Innenarchitektur, Desing Beton-Möbel ',

  icons: {icon : "/assets/images/LogoEZ990.svg"}

}

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return (
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
    <html> 
      <body className="min-h-screen flex flex-col antialiased ">
        
            {children}
        
      </body>
    </html>
    

    </ClerkProvider>
  )
  


}
