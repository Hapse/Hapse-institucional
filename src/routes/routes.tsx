
import { Route, Routes } from 'react-router-dom';
import TimeDescricao from '../components/TimeDescricao/TimeDescricao';

import Header from '../components/Header/Header';
import QuemSomos from '../components/QuemSomos/QuemSomos';
import NossosServicos from '../components/NossosServicos/NossosServicos';
import SolucoesPersona from '../components/SolucoesPersona/SolucoesPersona';
import Contatos from '../components/Contatos/Contatos';
import Avaliacoes from '../components/Avaliacoes/Avaliacoes';

const HomePage = () => (
  <>
    <Header />
    <QuemSomos />
    <NossosServicos />
    <SolucoesPersona />
    <Contatos />
    <Avaliacoes />
  </>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/conheca-nosso-time" element={<TimeDescricao />} />
    </Routes>
  );
};

export default AppRoutes;