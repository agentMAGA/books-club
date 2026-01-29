import React from 'react';
import { useAdminRouts } from '../../store/useAdminRouts';
import styles from '../../scss/components/adminPanel.module.scss';
import { Link } from 'react-router';
import { useTheme } from '../../store/useTheme';

const ADMINROUTS = [
    {
        url:'blogs',
        route:'Статьи'
    },
    {
        url:'events',
        route:'Мероприятия'
    },
    {
        url:'users',
        route:'Пользователи'
    },
]

const AdminHeader = () => {
    const { theme } = useTheme();
  const {setActiveRoute , activeRoute} = useAdminRouts(); 
  return (
    <header className={theme === 'black' ? styles.adminHeader : `${styles.adminHeader} ${styles.adminHeaderColor}`}>
        <Link to="/">
          <img src={theme === 'black' ? "img/back.svg" : "img/backBleack.svg"} alt="back" />
        </Link>
        <ul>
            {ADMINROUTS.map((item)=>(
                <li key={item.url} onClick={()=>setActiveRoute(item.url)} className={item.url === activeRoute && styles.active}>
                    {item.route}
                </li>
            ))}
        </ul>
    </header>
  );
};
// {theme === 'black' ? "img/back.svg" : "img/backBleack.svg"}
export default AdminHeader
