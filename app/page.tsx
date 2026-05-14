import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BitcoinDepositPanel from "./components/BitcoinDepositPanel";
import BitcoinPaymentPanel from "./components/BitcoinPaymentPanel";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex gap-5 items-start max-w-5xl">
            <BitcoinDepositPanel />
            <BitcoinPaymentPanel />
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center text-xs text-gray-400 space-y-1">
            <p>
              © 2026 <span className="font-semibold text-gray-500">BaseTools</span> - Premium
              Digital Services
            </p>
            <p>
              <a href="#" className="text-blue-500 hover:underline">
                Support
              </a>
              {" • "}
              <a href="#" className="text-blue-500 hover:underline">
                Reports
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
