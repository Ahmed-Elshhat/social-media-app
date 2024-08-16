import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import Watched from "./pages/Watched/Watched";
import Notification from "./pages/Notification/Notification";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import Search from "./pages/Search/Search";
import Reels from "./pages/Reels/Reels";
import CreateReel from "./pages/Reels/CreateReel/CreateReel";
import Live from "./pages/Live/Live";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import CreatePostPopup from "./components/Popups/CreatePostPopup/CreatePostPopup";

function App() {
  return (
    <div className="App">
      <CreatePostPopup />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <NavBar />
              <Home />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/friends"
          element={
            <>
              <Header />
              <Friends />
              <NavBar />
            </>
          }
        />

        <Route
          path="/watched"
          element={
            <>
              <Header />
              <Watched />
              <NavBar />
            </>
          }
        />

        <Route
          path="/notifications"
          element={
            <>
              <Header />
              <Notification />
              <NavBar />
            </>
          }
        />

        <Route
          path="/chat"
          element={
            <>
              <Header />
              <Chat />
              <NavBar />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
              <NavBar />
            </>
          }
        />

        <Route
          path="/live"
          element={
            <>
              <Header />
              <Live />
              <NavBar />
            </>
          }
        />

        <Route path="/search" element={<Search />} />
        <Route path="/reel" element={<Reels />} />
        <Route path="/reel/:reelId" element={<Reels />} />
        <Route path="/reel/create" element={<CreateReel />} />
      </Routes>
    </div>
  );
}

export default App;
