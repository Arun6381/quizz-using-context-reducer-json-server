// eslint-disable-next-line react/prop-types
import Mainparticles from "./Mainparticles.jsx";
function Main({ children }) {
  return (
    <main className="main">
      <Mainparticles />
      {children}
    </main>
  );
}

export default Main;
