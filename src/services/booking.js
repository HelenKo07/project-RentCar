export const bookCar = (carId, formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Form submitted:", { carId, ...formData });
      resolve({ status: "success" });
    }, 1000);
  });
};
