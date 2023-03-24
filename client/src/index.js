import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ContractsContextProvider } from "./context/ContractsContext";
import { CareersContextProvider } from "./context/CareersContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthContextProvider>
      <ContractsContextProvider>
        <CareersContextProvider>
          <App />
        </CareersContextProvider>
      </ContractsContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
