import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "styles/components/Sidebar.module.scss";

import { BsSearch, BsFillLightbulbFill } from "react-icons/bs";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { IoMapSharp, IoShareSocialSharp } from "react-icons/io5";

import { FaRegUser } from "react-icons/fa";

import { RiMedal2Line } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import withProtection from "components/hocs/withProtection";

import placeholderImg from "assets/placeholder.png";
import placeholderImg2 from "assets/placeholder2.png";

const getLinks = (type: string) => [
  type === "EMBARCADOR"
    ? {
        name: "Buscar Sinergia",
        path: "/",
        icon: <BsSearch />,
      }
    : {
        name: "Atualizações",
        path: "/",
        icon: <BsFillLightbulbFill />,
      },
  {
    name: "Minhas rotas",
    path: "/minhas-rotas",
    icon: <IoMapSharp />,
  },
  {
    name: "Minha rede",
    path: "/minha-rede",
    icon: <IoShareSocialSharp />,
  },
  {
    name: "Selo JuntUs",
    path: "/selo-juntus",
    icon: <RiMedal2Line />,
  },
  {
    name: "Minha conta",
    path: "/minha-conta",
    icon: <FaRegUser />,
  },
];

const pathnames = ["/login", "/password-change", "/register"];

function Sidebar(props: any) {
  const [active, setIsActive] = useState(false);

  if (pathnames.includes(window.location.pathname)) return null;

  return (
    <div className={styles.sidebar_container + " appear"} data-active={active}>
      <div className={styles.sidebar}>
        <div
          className={styles.nav_menu}
          onClick={() => setIsActive((active) => !active)}
        >
          {active ? <MdMenuOpen /> : <MdMenu />}
        </div>
        <div className={styles.top_container}>
          <img
            className={styles.photo}
            src={props.type === "EMBARCADOR" ? placeholderImg2 : placeholderImg}
            alt="placeholder"
          />
          <h2>
            {props.type === "EMBARCADOR" ? "AGÊNCIA UXK" : "QB LOGÍSTICA"}
          </h2>
        </div>
        <nav>
          <IconContext.Provider value={{ className: styles.sidebar_icon }}>
            <ul>
              {getLinks(props.type).map((link: any) => (
                <SidebarLink {...link} key={link.name} />
              ))}
            </ul>
          </IconContext.Provider>
        </nav>

        <div className={styles.bottom_container}>
          <Link to="/termos-de-uso">Termos de Uso</Link>
          <Link to="/politica-de-seguranca">Política de Segurança</Link>
        </div>
      </div>
    </div>
  );
}

function SidebarLink(props: any) {
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setActive(props.path === pathname);
  }, [pathname]);

  return (
    <Link to={props.path}>
      <li className={styles.link} data-active={active}>
        <div className={styles.link_content}>
          {props.icon}
          <div className={styles.link_name}>{props.name}</div>
        </div>
      </li>
    </Link>
  );
}

export default Sidebar;
