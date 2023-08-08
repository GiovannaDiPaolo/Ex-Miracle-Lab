import  { useState } from 'react';
import LoginPage from './Components/LoginPage';
import PrivatePage from './Components/PrivatePage';

enum AuthStatus {
  LoggedIn,
  LoggedOut,
}

function App() {
  const [authStatus, setAuthStatus] = useState(AuthStatus.LoggedOut);

  function handleLogin() {
    setAuthStatus(AuthStatus.LoggedIn);
  }

  function handleLogout() {
    setAuthStatus(AuthStatus.LoggedOut);
  }

  return (
    <div>
      {authStatus === AuthStatus.LoggedIn ? (
        <PrivatePage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;