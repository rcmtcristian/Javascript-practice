let test = document.querySelector(".test");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve((test.innerHTML = "done")), 1000);
});

promise.then(
  (result) => alert(result),
  (error) => alert(error)
);
