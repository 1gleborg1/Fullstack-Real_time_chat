import React from "react";
import ReactDOM from "react-dom/client"; // Используйте ReactDOM.createRoot для новых версий React
import App from "./components/App"; // Убедитесь, что путь к App.js правильный

// Создайте корень для рендеринга
const root = ReactDOM.createRoot(document.getElementById("app")); // Убедитесь, что элемент с id "app" существует в вашем HTML

// Рендеринг вашего приложения
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);