import api from "./axios";

export const fetchLocalizationPerAddress = async address => {
  try {
    const { data } = api.get(
      `https://nominatim.openstreetmap.org/search?q=${address}&format=json&polygon=1&addressdetails=1`
    );

    return data;
  } catch (error) {
    return error;
  }
};
