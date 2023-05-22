import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "renderer/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />
        // children: [
        //         { path: 'settings', element: <SettingsPage /> },
        //         { path: 'account', element: <UserPage />},
        // ]
    }
]

export const router = createBrowserRouter(routes);