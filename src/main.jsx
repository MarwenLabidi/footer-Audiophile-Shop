import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const mountFooter = (el) => {
        ReactDOM.createRoot(el).render(
                <React.StrictMode>
                        <App />
                </React.StrictMode>
        );
};

if (!window.containerContext) {
        mountFooter(document.getElementById("root"));
}

export { mountFooter };
