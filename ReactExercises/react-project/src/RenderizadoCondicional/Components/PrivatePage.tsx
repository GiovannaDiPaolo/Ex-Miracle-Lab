interface PrivatePageProps {
  onLogout: () => void;
}

function PrivatePage(props: PrivatePageProps) {
  return (
    <div>
      <p>Esta página solo puedo verla porque estoy logueado</p>
      <button onClick={props.onLogout}>Cerrar sesión</button>
    </div>
  );
}

export default PrivatePage;
