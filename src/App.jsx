import "react-toastify/dist/ReactToastify.css";
import Contacts from "./pages/Contacts/Contacts";
import ContactForm from "./components/ContactForm/ContactForm";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={() => {
            const token = localStorage.getItem("token");
            return token ? <Contacts /> : Navigate({ to: "/register" });
          }}
        />
        <Route
          path="/add-contact"
          element={() => {
            const token = localStorage.getItem("token");
            return token ? <ContactForm /> : Navigate({ to: "/login" });
          }}
        />
        <Route
          path="/update-contact/:contact_id"
          element={() => {
            const token = localStorage.getItem("token");
            return token ? <ContactForm /> : Navigate({ to: "/login" });
          }}
        />
        <Route path="/register" element={() => {
            const token = localStorage.getItem("token");
            return token ? <Contacts /> : <Register/>;}} />
        <Route path="/login" element={() => {
            const token = localStorage.getItem("token");
            return token ? <Contacts /> : <Login/>;}} />
        <Route
          path="*"
          element={() => {
            Navigate({ to: "/login" });
          }}
        />
      </Routes>
    </>
  );
}

export default App;
