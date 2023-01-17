import { createBrowserRouter } from 'react-router-dom'
import Capitulos from '../pages/Capitulos'
import Personajes from '../pages/Personajes'
import NotFound from '../pages/NotFound'
import LayoutPublic from '../layouts/LayoutPublic'
import Login from '../pages/Login'
import Personaje from '../pages/Personaje'
import Capitulo from '../pages/Capitulo'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        // path: '/',
        index: true,
        element: <Capitulos />,
      },
      {
        path: '/personajes',
        element: <Personajes />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/personajes/:id',
        element: <Personaje />,
      },
      {
        path: '/episodios/:id',
        element: <Capitulo />,
      },

    ],
  },
])
