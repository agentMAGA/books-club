import React from 'react';
import { useAdminRouts } from '../../store/useAdminRouts';
import styles from '../../scss/components/adminPanel.module.scss';
import { Link } from 'react-router';

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
  const {setActiveRoute , activeRoute} = useAdminRouts(); 
  return (
    <header className={styles.adminHeader}>
        <Link to="/">
          <img src="img/back.svg" alt="back" />
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

export default AdminHeader
