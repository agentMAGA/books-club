import React from 'react';
import AdminHeader from '../components/Admin/AdminHeader';
import styles from '../scss/components/adminPanel.module.scss';
import { useAdminRouts } from '../store/useAdminRouts';
import AdminEvents from '../components/Admin/AdminEvents';
import AdminBlogs from '../components/Admin/AdminBlogs';
import AdminUsers from '../components/Admin/AdminUsers';

const AdminPanel = () => {
  const {activeRoute} = useAdminRouts();
  return (
    <section className={styles.adminPanel}>
      <AdminHeader/>
      {activeRoute === 'blogs' && <AdminBlogs/>}
      {activeRoute === 'events' && <AdminEvents/>}
      {activeRoute === 'users' && <AdminUsers/>}
    </section>
  )
}

export default AdminPanel
