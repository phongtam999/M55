import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === 'letmein') {
      console.log('Đăng nhập thành công');
      // Thực hiện hành động khi đăng nhập thành công
    } else {
      console.log('Sai email hoặc mật khẩu');
      // Thông báo lỗi khi đăng nhập thất bại
    }
  };

  return (
    <div>
      // Input email
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      // Input password
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      // Nút đăng nhập
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login;