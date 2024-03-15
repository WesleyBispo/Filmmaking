import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <div className=" flex px-4 sm:px-10 justify-center items-center w-full h-16 bg-black text-white text-2xl">
      <div className="flex-1 flex items-center justify-start">
        <NavLink to="/" className={({ isActive }) => (isActive ? '' : '')}>
          Prime Flix
        </NavLink>
      </div>
      <div className="flex-1 flex items-center justify-end text-center sm: px-0 ">
        <NavLink
          to="/favoritos"
          className={({ isActive }) =>
            `favoritos-link
          ${isActive ? '' : ''}`
          }
        >
          Meus Filmes
        </NavLink>
      </div>
    </div>
  );
}
