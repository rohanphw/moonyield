import { useState } from "react";
import NetworkSelector from "./NetworkSelector";

export default function FormDeposit() {
  const [selectedNetwork, setSelectedNetwork] = useState("polygon");

  return (
    <div>
      <div className="flex flex-row rounded-md border-2 border-slate-400 mt-16 bg-slate-100 p-8 lg:ml-96 lg:mr-96 justify-center">
        <div className="flex gap-12 justify-center">
          <div className="mt-20 mr-12">
            <span className="text-4xl font-semibold text-center">
              Earn juicy 8% yield
            </span>
          </div>
          <div className="flex justify-center flex-col gap-3 ">
            <span>Select the network to deposit from into Moonbeam network</span>
            <NetworkSelector
              selectedNetwork={selectedNetwork}
              setSelectedNetwork={setSelectedNetwork}
            />
            <form className="flex gap-3 flex-col">
              <input
                type="text"
                placeholder="amount"
                className="rounded-md bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 placeholder-gray-500 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
              />
              <button
                type="submit"
                className="rounded-md bg-slate-200 hover:bg-slate-300 text-gray-800 outline-none border-2 border-slate-500 px-3 py-2.5"
              >
                deposit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}