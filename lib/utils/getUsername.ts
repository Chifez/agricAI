export const formatUserName = (name: string) => {
  const nameParts = name.trim().split(' '); // Split the name by spaces

  if (nameParts.length === 1) {
    return nameParts[0].substring(0, 2).toUpperCase();
  }

  const initials = nameParts[0][0] + nameParts[1][0];
  return initials.toUpperCase();
};
