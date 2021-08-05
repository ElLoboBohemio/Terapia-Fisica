import React from 'react';

import { AiFillHome, AiFillFilePdf } from 'react-icons/ai';
import { FaAddressBook, FaCodeBranch } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/Terapia-Fisica',
    icon: <AiFillHome />,
    cName: 'nav__li'
  },
  {
    title: 'Perfil',
    path: '/perfil',
    icon: <FaAddressBook />,
    cName: 'nav__li'
  },
  {
    title: 'Especialidades',
    path: '/especialidades',
    icon: <FaCodeBranch />,
    cName: 'nav__li'
  },
  {
    title: 'Referencias',
    path: '/referencias',
    icon: <AiFillFilePdf />,
    cName: 'nav__li'
  }
];