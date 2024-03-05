import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ChannelPage } from "./pages/ChannelPage";
import { Navbar } from "./components/Navbar";
import { ChannelListPage } from "./pages/ChannelListPage";

export function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="channels" element={ <ChannelListPage /> } />
        <Route path="/channels/:channelId" element={ <ChannelPage /> } />
      </Routes>
    </>
  )
}