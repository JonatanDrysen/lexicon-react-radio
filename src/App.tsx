import { useState, useEffect } from "react"
import { getAllChannels } from "./api/getAllChannels"
import { AllChannelsResponse } from "./interfaces";

export function App() {
  const [allChannelsData, setAllChannelsData] = useState<AllChannelsResponse | null>(null)

  async function fetchData(): Promise<void> {
    try {
      const response = await getAllChannels()
      setAllChannelsData(response)
    } catch (err) {
      console.error("Err fetching data: ", err)
    }
  }

  useEffect(() => {
    console.log("useEffect triggered.")
    fetchData()
  }, [])

  if (allChannelsData) {
    console.log("data received:", allChannelsData)
  }

  return (
    <>
      <div>App</div>
    </>
  )
}