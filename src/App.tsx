import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import Watched from "./pages/Watched/Watched";
import Notification from "./pages/Notification/Notification";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}

export default App;
