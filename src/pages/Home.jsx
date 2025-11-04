import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* bg effects */}
      <StarBackground />
      {/* navbar */}
      <Navbar />
      {/* main content */}

      {/* footer*/}
    </div>
  );
};
