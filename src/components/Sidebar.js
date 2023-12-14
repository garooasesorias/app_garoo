import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CollapsibleDropdown from "./CollapsibleDropdown";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaDollarSign,
  FaPercentage,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";
import { NotificacionesContext } from "../context/NotificacionesContext";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";

import { BsCircleFill } from "react-icons/bs";
// {/* <BsCircleFill style={{ color: "red" }} /> */}

function Sidebar({ isOpen, toggle, isMinimized, setIsMinimized }) {
  const { notificaciones } = useContext(NotificacionesContext);

  return (
    <>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 h-screen transition-transform sm:translate-x-0 ${
          isMinimized ? "w-20" : "w-64"
        }`}
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            <li>
              <Link to="/clientes">
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <IoPeopleSharp className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    <b>Clientes</b>
                  </span>
                </button>
              </Link>
              <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>
              <CollapsibleDropdown
                buttonText={<b>Materias</b>}
                icon={
                  <FaBookOpen className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                }
              >
                <li className="ml-5">
                  <NavLink to="/materias">Materias</NavLink>
                </li>
                <li className="ml-5">
                  <NavLink to="/tipoMaterias">Tipo de Materias</NavLink>
                </li>
                {/* Other sub-options for "Actividades" */}
              </CollapsibleDropdown>
            </li>
            <li>
              <CollapsibleDropdown
                buttonText={<b>Asesores</b>}
                icon={
                  <FaChalkboardTeacher className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                }
              >
                <li className="mr-2">
                  <NavLink to="/asesores">
                    <button
                      type="button"
                      className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-pages"
                      data-collapse-toggle="dropdown-pages"
                    >
                      <span className="flex-1 ml-3 text-left whitespace-nowrap">
                        Asesores
                      </span>
                    </button>
                  </NavLink>
                </li>
                <li className="ml-2">
                  <NavLink
                    to="/skills"
                    className="flex-1 ml-3 text-left whitespace-nowrap"
                  >
                    Skills
                  </NavLink>
                </li>
                <li className="ml-2">
                  <NavLink
                    to="/especialidades"
                    className="flex-1 ml-3 text-left whitespace-nowrap"
                  >
                    Especialidades
                  </NavLink>
                </li>
              </CollapsibleDropdown>

              <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>
              <CollapsibleDropdown
                buttonText={<b>Actividades</b>}
                icon={
                  <FaPen className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                }
              >
                <li className="ml-5">
                  <NavLink to="/actividades">Actividades</NavLink>
                </li>
                <li className="ml-5">
                  <NavLink to="/tipoActividades">Tipo de Actividades</NavLink>
                </li>
                {/* Other sub-options for "Actividades" */}
              </CollapsibleDropdown>
            </li>
            <li>
              <CollapsibleDropdown
                buttonText={<b>Planes</b>}
                icon={
                  <FaPercentage className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                }
              >
                <li className="ml-5">
                  <NavLink to="/planes">Planes</NavLink>
                </li>
                <li className="ml-5">
                  <NavLink to="/descuentos">Descuentos</NavLink>
                </li>
                {/* Other sub-options for "Actividades" */}
              </CollapsibleDropdown>
            </li>
            <li>
              <CollapsibleDropdown
                buttonText={<b>Cotizaciones</b>}
                icon={
                  <FaDollarSign className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                }
              >
                <li className="ml-5">
                  <NavLink to="/cotizaciones">Cotizaciones</NavLink>
                </li>
                <li className="ml-5">
                  <NavLink to="/estadosCotizaciones">
                    Estados Cotizaciones
                  </NavLink>
                </li>
                {/* Other sub-options for "Actividades" */}
              </CollapsibleDropdown>
            </li>
            <li>
              <CollapsibleDropdown
                buttonText={<b>CursosV2</b>}
                icon={
                  notificaciones && notificaciones.length > 0 ? (
                    <BsCircleFill style={{ color: "red" }} />
                  ) : (
                    <FaGraduationCap className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  )
                }
              >
                <li className="ml-5">
                  <NavLink to="/cursosv2">Cursos</NavLink>
                </li>
                <li className="ml-5">
                  <NavLink to="/estadosCursosv2">Estados Cursos</NavLink>
                </li>
                {/* Other sub-options for "Actividades" */}
              </CollapsibleDropdown>
            </li>
            <li>
              <CollapsibleDropdown
                buttonText={<b>Reportes</b>}
                icon={
                  <FaChartLine className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                }
              >
                <li className="ml-5">
                  <NavLink to="/actividadesReportes">
                    Reporte Actividades
                  </NavLink>
                </li>
              </CollapsibleDropdown>
            </li>
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3">Docs</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                <span className="ml-3">Components</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
