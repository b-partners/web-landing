import React from 'react';

import { Header } from './components/Header';
import { Feature } from './components/Feature';
import { Welcome } from './components/Welcome';
import { Pricing } from './components/Pricing';

export function Home() {
  const [showModal, setToggleShowModal] = useToggle(false);

  const activeModal = (e) => {
    e.preventDefault();
    setToggleShowModal(true);
  };
  return (
    <div>
      <Header />
      <Welcome />
      <Feature />
      <Pricing />
    </div>
  );
}
