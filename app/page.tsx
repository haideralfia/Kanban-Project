import DND from "@/components/DND";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex w-full flex-row">
     {/* Sidebar */}
      <Sidebar />

      <section className="m-0 w-full">
        {/* Navbar */}
        <Navbar />

     {/* Home */}
      <LandingPage />
      
     {/* DND */}
      <DND />
      </section>
     
    </main>
  )
}
