import img from '/img/not-found.jpg';

function NotFound() {
  return (
    <div>
      <h1>This is Not Found 404</h1>
      <img src={img} alt="" />
    </div>
  );
}

export default NotFound;
