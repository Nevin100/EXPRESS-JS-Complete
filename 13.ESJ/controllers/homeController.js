const homeController = (req, res) => {
  const data = {
    name: "Nevin",
  };
  res.render("index", data);
};

export { homeController };
