export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/users"); // Ganti dengan API sebenarnya
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data; // Mengembalikan data dari API
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return empty array jika ada error
  }
};
