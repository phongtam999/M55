import React, { useState } from 'react';
import Login from './components/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      {currentUser ? (
        // Hiển thị nội dung khi đã đăng nhập
        <h1>Xin chào, {currentUser.email}!</h1>
      ) : (
        // Hiển thị form đăng nhập
        <Login onLogin={(user) => setCurrentUser(user)} />
      )}
    </div>
  );
}

export default App;
