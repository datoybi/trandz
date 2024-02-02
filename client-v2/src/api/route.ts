const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.error(e);
  }
};
