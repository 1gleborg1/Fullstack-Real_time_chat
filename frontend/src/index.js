import React from "react";
import ReactDOM from "react-dom/client"; // ����������� ReactDOM.createRoot ��� ����� ������ React
import App from "./components/App"; // ���������, ��� ���� � App.js ����������

// �������� ������ ��� ����������
const root = ReactDOM.createRoot(document.getElementById("app")); // ���������, ��� ������� � id "app" ���������� � ����� HTML

// ��������� ������ ����������
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);