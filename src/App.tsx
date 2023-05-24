import Footer from './components/Footer';
import Card from './components/Card';

import avatar from './assets/image-avatar.png';
import equilibrium from "./assets/image-equilibrium.jpg";

import './App.css';

function App() {
  const cardData = {
    name: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    value: 0.041,
    timeRemaining: "3 days left",
    person: {
      name: "Jules Wyvern",
      imgUrl: avatar,
    },
    image: equilibrium,
  };

  return (
    <>
      <div 
        className="
          flex 
          flex-col 
          justify-center 
          items-center
          h-screen
          w-screen
        ">
        <Card {...cardData}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
