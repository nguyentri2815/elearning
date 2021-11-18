
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const PORT = process.env.PORT || 3000;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});