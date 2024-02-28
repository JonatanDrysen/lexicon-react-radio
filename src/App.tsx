import { useState, useEffect } from "react"
import { getAllChannels } from "./api/getAllChannels"
import { AllChannelsResponse } from "./interfaces";

export function App() {
  const [data, setData] = useState<AllChannelsResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllChannels()
      setData(response)
    }
    fetchData()
  }, [])

  if(data) {console.log(data)}

  return (
    <>
    <div>App</div>
    </>
  )
}