import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav__li'
  },
  {
    title: 'Especialidades',
    path: '/especialidades',
    icon: <FaIcons.FaCodeBranch />,
    cName: 'nav__li'
  },
  {
    title: 'Cursos',
    path: '/cursos',
    icon: <FaIcons.FaBookOpen />,
    cName: 'nav__li'
  },
  {
    title: 'Perfil',
    path: '/perfil',
    icon: <FaIcons.FaAddressBook />,
    cName: 'nav__li'
  }
];