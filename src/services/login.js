import axios from "axios";

export const getLoginService = async (userName, password) => {
  const { data } = await axios.post(
    `http://localhost:5000/api/OrgaosPublicos/api/v1/pflogin?username=${userName}&senha=${password}`
  );
  console.log(data)
  return data;
};
