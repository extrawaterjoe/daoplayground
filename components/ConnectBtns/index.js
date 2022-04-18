import React from "react"
import { useConnect } from "wagmi"

const ConnectBtns = () => {
  const [{ data, error }, connect] = useConnect()

  return (
    <div className=" flex flex-col items-center justify-center w-1/4">
      {data.connectors.map(connector =>
        connector.ready ? (
          <button
            className="mb-4 w-3/4 rounded-full bg-gradient-to-r from-[#0DB2AC] via-[#FC8D4D] to-[#FABA32] p-0.5 shadow hover:bg-gradient-to-l"
            key={connector.id}
            onClick={async () => {
              const connected = await connect(connector)
            }}
          >
            <span className="block rounded-full bg-slate-200 px-8 py-3 font-medium text-black hover:bg-opacity-50 dark:bg-slate-900 dark:text-white dark:hover:bg-opacity-75">
              {connector.name}
              {!connector.ready && " (unsupported)"}
            </span>
          </button>
        ) : (
          <button className="my-2 rounded-xl border bg-zinc-500 py-3 px-6" key={connector.id}>
            {connector.name}
            {!connector.ready && " (unsupported)"}
          </button>
        )
      )}
    </div>
  )
}

export default ConnectBtns
