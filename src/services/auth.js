export const getCurrentUser = () => {
  const storedUser =
    localStorage.getItem(
      "servelink_user"
    );

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    return null;
  }
};

export const saveCurrentUser = (
  user
) => {
  localStorage.setItem(
    "servelink_user",
    JSON.stringify(user)
  );
};

export const logout = () => {
  localStorage.removeItem(
    "servelink_user"
  );
};