export const pathExists = async (path) => {
  try {
    await fs.stat(path);
    return true;
  } catch {
    return false;
  }
};
