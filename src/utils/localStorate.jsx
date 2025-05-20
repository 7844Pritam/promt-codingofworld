export const saveAuthData = ({ token, role, canCreatePrompt }) => {
  localStorage.setItem("authToken", token);
  localStorage.setItem("authRole", role);
  localStorage.setItem("canCreatePrompt", JSON.stringify(canCreatePrompt));
};

export const clearAuthData = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authRole");
  localStorage.removeItem("canCreatePrompt");
};

// New getter function to fetch and parse auth data from localStorage
export const getAuthData = () => {
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("authRole");
  const canCreatePrompt = JSON.parse(localStorage.getItem("canCreatePrompt"));

  return {
    token,
    role,
    canCreatePrompt,
  };
};
