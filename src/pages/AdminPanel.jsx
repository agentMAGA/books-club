import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminHeader from "../components/admin/AdminHeader";
import AdminPostsSection from "../components/admin/AdminPostsSection";
import AdminEventsSection from "../components/admin/AdminEventsSection";
import AdminUsersSection from "../components/admin/AdminUsersSection";
import styles from "../scss/components/admin/adminPanel.module.scss";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.layout}>
          <AdminHeader activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "posts" && <AdminPostsSection />}
          {activeTab === "events" && <AdminEventsSection />}
          {activeTab === "users" && <AdminUsersSection />}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdminPanel;
