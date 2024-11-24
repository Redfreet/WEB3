import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const GameWrapper1 = () => {
  return (
    <div className="h-screen flex justify-center align-middle">
      <h1 className="my-auto text-4xl font-semibold">
        Please Connect Your Wallet to continue
      </h1>
    </div>
  );
};

const GameWrapper2 = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center align-middle">
      <div className="my-auto w-4/6">
        <div className=" flex justify-center">
          <button className="bg-green-500 text-white hover:bg-green-500 px-6 py-2 rounded-xl shadow-md my-4">
            Start Game
          </button>
        </div>
        <div className=" flex justify-center gap-2">
          <div className=" w-1/2 px-4">
            <div className="bg-white px-6 py-2 rounded-xl shadow-md my-4">
              <div>
                <div className="bg-gray-300 text-xl px-6 py-4 rounded-xl my-4 text-center font-semibold">
                  Select Your Move
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-red-400 text-xl hover:bg-red-300 px-4 py-4 rounded-xl shadow-md my-4">
                  Clear
                </button>
                <button className="bg-orange-400 text-white text-xl hover:bg-orange-300 px-4 py-4 rounded-xl shadow-md my-4">
                  Rock
                </button>
                <button className="bg-orange-400 text-white text-xl hover:bg-orange-300 px-4 py-4 rounded-xl shadow-md my-4">
                  Paper
                </button>
                <button className="bg-orange-400 text-white text-xl hover:bg-orange-300 px-4 py-4 rounded-xl shadow-md my-4">
                  Scissors
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-4">
            <div className="bg-white px-6 py-2 rounded-xl shadow-md my-4">
              <div>
                <div className="bg-gray-300 text-xl px-6 py-4 rounded-xl my-4 text-center font-semibold">
                  Select Your Move
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-orange-400 text-white text-xl hover:bg-orange-300 px-8 py-4 rounded-xl shadow-md my-4">
                  Rock
                </button>
                <button className="bg-orange-400 text-white text-xl hover:bg-orange-300 px-8 py-4 rounded-xl shadow-md my-4">
                  Paper
                </button>
                <button className="bg-orange-400 text-white text-xl hover:bg-orange-300 px-8 py-4 rounded-xl shadow-md my-4">
                  Scissors
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="bg-green-600 text-2xl font-semibold px-44 py-4 rounded-xl shadow-md my-4">
            Game Result
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const { connected } = useWallet();
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center align-middle bg-neutral-100">
        <div className="absolute right-4 top-4 items-end">
          <WalletSelector />
        </div>
        {connected ? GameWrapper2() : GameWrapper1()}
      </div>
    </>
  );
}
export default App;
