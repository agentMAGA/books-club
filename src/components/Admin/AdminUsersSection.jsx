import { useEffect, useState, useCallback } from "react";
import { useApi } from "../../hooks/useApi";
import { useTheme } from "../../store/useTheme";
import styles from "../../scss/components/admin/adminSection.module.scss";
import { ROLE_OPTIONS } from "../../constants/roles";
import { getRoleLabel, sortRolesByPriority } from "../../utils/roles";

const AdminUsersSection = () => {
  const { apiCall } = useApi();
  const { theme } = useTheme();

  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState({});

  const fetchUsers = useCallback(async () => {
    const data = await apiCall("/users");
    setUsers(data);
  }, [apiCall]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const addRole = async (userId) => {
    const roleId = selectedRole[userId];
    if (!roleId) return;

    await apiCall(`/admin/users/${userId}/add-role?roleId=${roleId}`, {
      method: "POST",
    });

    setSelectedRole((p) => ({ ...p, [userId]: "" }));
    fetchUsers();
  };

  const removeRole = async (userId, roleId) => {
    await apiCall(`/admin/users/${userId}/remove-role?roleId=${roleId}`, {
      method: "POST",
    });

    fetchUsers();
  };

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
        {users.map((user) => {
          const userRoles = sortRolesByPriority(user.roles || []);

          return (
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

                <div className={styles.roles}>
                  {userRoles.map((r) => (
                    <span key={r.id} className={styles.roleChip}>
                      {getRoleLabel(r)}
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
                  {ROLE_OPTIONS.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.label}
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
          );
        })}
      </div>
    </section>
  );
};

export default AdminUsersSection;
