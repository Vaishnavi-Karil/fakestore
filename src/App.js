import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Utility/router/route';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackUI } from './component/FallbackUi';

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
