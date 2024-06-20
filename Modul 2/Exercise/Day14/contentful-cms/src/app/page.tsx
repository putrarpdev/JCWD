import NavBar from "@/components/navbar";
import HomeView from "@/view/home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed w-full z-50">
        <NavBar />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-full items-center justify-between font-mono text-sm lg:flex">
          <HomeView />
        </div>
      </main>
    </>
  );
}
