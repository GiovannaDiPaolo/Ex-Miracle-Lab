interface LoginPageProps {
  onLogin: () => void;
}

function LoginPage(props: LoginPageProps) {
  return (
    <div>
      <button onClick={props.onLogin}>Iniciar sesión</button>
      <p>Inicia sesión para ver contenido privado</p>
    </div>
  );
}

export default LoginPage;
