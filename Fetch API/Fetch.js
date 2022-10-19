// Fetch API
const API_GET_URL = "https://reqres.in/api/users";
const API_POST_URL = API_GET_URL;
const API_PUT_URL = "https://reqres.in/api/users/3";
const API_DEL_URL = API_PUT_URL;

const gButton = document.getElementById("getbutton");
const pButton = document.querySelector("#postbutton");
const putButton = document.querySelector("#putbutton");
const dButton = document.querySelector(".delbutton");

const user = {
  name: "James",
  job: "Designation",
};

// GET Method //
const getList = () => {
  fetch(API_GET_URL)
    .then((response) => {
      if (response.ok) console.log("Response received");
      else console.log("Response failed");
      return response;
    })
    .then((resp) => resp.json())
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      throw "Please check the URL " + error;
    });
};

const postData = () => {
  fetch(API_POST_URL, {
    method: "POST",
    header: { "Content-Type": "application/json;" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
};

const putData = () => {
  fetch(API_PUT_URL, {
    method: "PUT",
    header: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((resp) => {
      console.log(resp.status);
      if (resp.status == 200 && resp.status <= 299)
        console.log("User Details Updated successfully");
      else console.log("User Info Updation Failed");
      return resp;
    })
    .then((response) => response.json())
    .then((resp) => console.log(resp))
    .catch((error) => console.log("The error is", error));
};

const delData = () => {
  fetch(API_DEL_URL, {
    method: "DELETE",
    header: {
      "content-type": "application/json",
    },
  })
    .then((resp) => {
      console.log(resp.status);
      if (resp.status == 200 || resp.status <= 299)
        console.log("User Details Deleted Successfully");
      else console.log("User Deletion Failed");
    })
    .catch((error) => console.log("Deletion Errored", error));
};

gButton.addEventListener("click", getList);
pButton.addEventListener("click", postData);
putButton.addEventListener("click", putData);
dButton.addEventListener("click", delData);
