import { ClerkProvider } from "@clerk/nextjs"
import {Inter} from "next/font/google"
import '../globals.css'

export const metadata = {
    title: 'Theads',
    description: 'A NextJs 13 Theads'
}

const inter = Inter({subsets:["latin"]})

export default function RootLayout({
    children
}: { children: React.ReactNode }) {
    return(
     <ClerkProvider>
        <html lang="es">
            <body className={`${inter.className} bg-dark-1`}>
                <div className="w-full flex justify-center items-center min-h-screen"> {children}</div>
            </body>
        </html>
    </ClerkProvider>
)}