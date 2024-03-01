import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ChannelPage } from "./pages/ChannelPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/channels/:channelId" element={ <ChannelPage /> } />
      </Routes>
    </>
  )
}