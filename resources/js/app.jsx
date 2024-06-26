import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Navbar from "./Pages/Navbar";
import { DynamicProvider } from "./Pages/DynamicContext";
import { clientSocket } from "./Pages/client.cjs";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("your-publishable-key");
const appName = import.meta.env.APP_NAME || "Carmaintain";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Elements stripe={stripePromise}>
                <DynamicProvider
                    config={{ defaultValues: { socket: clientSocket("auth") } }}
                >
                    <App {...props} />
                </DynamicProvider>{" "}
            </Elements>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
