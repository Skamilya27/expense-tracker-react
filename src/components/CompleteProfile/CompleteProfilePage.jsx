import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CompleteProfilePage = () => {
  const [defaultData, setDefaultData] = useState({ fullName: "", url: "" });
  const [userData, setUserData] = useState({
    fullName: "",
    url: "",
  });
  useEffect(() => {
    getPreviousValues();
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  async function getPreviousValues() {
    let idToken = localStorage.getItem("idToken");

    const res = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCbFTk4FsbWksp6ljbfam7dNwA4IyxJujU",
      { idToken: idToken }
    );
    setDefaultData({
      fullName: res.data.users[0].displayName,
      url: res.data.users[0].photoUrl,
    });
  }

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setUserData({ ...userData, [placeholder]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let idToken = localStorage.getItem("idToken");
    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCbFTk4FsbWksp6ljbfam7dNwA4IyxJujU",
        {
          idToken: idToken,
          displayName: userData.fullName,
          photoUrl: userData.url,
        }
      );

      toast("Profile Updated");
      document.querySelector("form").reset();
    } catch (e) {
      setIsLoading(false);
      toast(e.response.data.error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form m-auto my-3 w-25 p-3 shadow-lg rounded-3 bg-gradient"
        style={{
          backgroundColor: "#245296",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <div>
          <label className="d-flex justify-content-center">Full Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="fullName"
            defaultValue={defaultData.fullName}
            required
          />
        </div>

        <div className=" mt-2">
          <label className="d-flex justify-content-center">Profile Photo URL</label>
          <input
            type="url"
            className="form-control"
            onChange={handleChange}
            placeholder="url"
            defaultValue={defaultData.url}
            required
          />
        </div>

        <div className="d-flex justify-content-center mt-2">
          {isLoading && "Wait I'm Working🏃..."}
        {!isLoading && <input type="submit" className=" btn btn-secondary" value="UPDATE" />}
        </div>
      </form>
    </div>
  );
};

export default CompleteProfilePage;
