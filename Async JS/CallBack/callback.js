let name = "Jeshua Samuel";

const syncHigherOrderFn = (CB_syncCallbackFN) => {
  let x = CB_syncCallbackFN("James");
  console.log("Name from the Synchronous callback FN is", x);
};

const syncCallbackFN = (names) => {
  return names;
};

const asyncCallBackFN = () =>
  console.log("Name from ASYNChronous call FN is", name);

syncHigherOrderFn(syncCallbackFN);

const x = document.querySelector(".hit_me_button");
x.addEventListener("click", asyncCallBackFN);
