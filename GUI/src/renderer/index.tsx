import { createRoot } from 'react-dom/client';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { router } from 'app/router/router';
import { RouterProvider } from 'react-router-dom';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(
    <CookiesProvider>
      <RouterProvider router={router}/>
    </CookiesProvider>
  );
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
