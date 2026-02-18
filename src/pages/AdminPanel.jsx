import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminHeader from "../components/Admin/AdminHeader";
import AdminPostsSection from "../components/Admin/AdminPostsSection";
import AdminEventsSection from "../components/Admin/AdminEventsSection";
import AdminUsersSection from "../components/Admin/AdminUsersSection";
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
