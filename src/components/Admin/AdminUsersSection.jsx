import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useTheme } from "../../store/useTheme";
import styles from "../../scss/components/Admin/adminSection.module.scss";

const ROLES = [
  { id: 1, name: "BRONZE" },
  { id: 2, name: "SILVER" },
  { id: 3, name: "GOLD" },
  { id: 4, name: "RED" },
];

const AdminUsersSection = () => {
  const { apiCall } = useApi();
  const { theme } = useTheme();

  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState({});

  const fetchUsers = async () => {
    const data = await apiCall("/users");
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ➕ добавить роль
  const addRole = async (userId) => {
    const roleId = selectedRole[userId];
    if (!roleId) return;

    await apiCall(
      `/admin/users/${userId}/add-role?roleId=${roleId}`,
      { method: "POST" }
    );

    setSelectedRole((p) => ({ ...p, [userId]: "" }));
    fetchUsers();
  };

  // ➖ удалить роль
  const removeRole = async (userId, roleId) => {
    await apiCall(
      `/admin/users/${userId}/remove-role?roleId=${roleId}`,
      { method: "POST" }
    );

    fetchUsers();
  };

  // 🗑 удалить пользователя
  const deleteUser = async (userId) => {
    if (!window.confirm("Удалить пользователя?")) return;

    await apiCall(`/admin/users/${userId}/del`, {
      method: "DELETE",
    });

    setUsers((prev) => prev.filter((u) => u.id !== userId));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Пользователи</h2>

      <div className={styles.list}>
        {users.map((user) => (
          <div
            key={user.id}
            className={`${styles.card} ${
              theme !== "black" ? styles.cardLight : ""
            }`}
          >
            <div className={styles.info}>
              <strong>
                {user.firstName} {user.lastName}
              </strong>

              <span className={styles.subtitle}>{user.email}</span>

              {/* РОЛИ */}
              <div className={styles.roles}>
                {user.roles.map((r) => (
                  <span key={r.id} className={styles.roleChip}>
                    {r.name.replace("ROLE_", "")}
                    <button
                      type="button"
                      className={styles.roleRemove}
                      onClick={() => removeRole(user.id, r.id)}
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className={styles.actions}>
              <select
                className={styles.input}
                value={selectedRole[user.id] || ""}
                onChange={(e) =>
                  setSelectedRole({
                    ...selectedRole,
                    [user.id]: e.target.value,
                  })
                }
              >
                <option value="">Добавить роль</option>
                {ROLES.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className={styles.btn}
                onClick={() => addRole(user.id)}
              >
                Добавить
              </button>

              <button
                type="button"
                className={`${styles.btn} ${styles.btnDanger}`}
                onClick={() => deleteUser(user.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminUsersSection;
