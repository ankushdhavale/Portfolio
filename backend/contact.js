fetch("https://portfolio-d7301-default-rtdb.firebaseio.com/contact.json")
  .then((response) => response.json())
  .catch((err) => console.log(err));
