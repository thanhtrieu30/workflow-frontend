// Viết hoa chữ cái đầu trong chuỗi

export const formatLetter = (string) => {
  if (!string) return "";
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};
