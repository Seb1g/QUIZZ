export const ReadAllLocalStorage = () => {
  const allItems: { [ ket: string ]: string } = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if(key !== null) {
      const value = localStorage.getItem(key) ?? "";
      allItems[key] = value;
    }
  }
  return allItems;
};