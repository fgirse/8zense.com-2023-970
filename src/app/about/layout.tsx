import {Footer} from "@/app/components/Footer";
//import Navigation from "@/app/components/Navbar/Navbar2";
//import styles from'./about.module.css';
//import ScrollToTop from "@/components/BackToTop/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
      <main className="">{children}</main>
      
      <Footer />
    </>
  )
}