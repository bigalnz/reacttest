const BirdsList = (props) => {
  const birds = props.birds;

  console.log(props, birds);

  return (
    <div className="list-bird container">
      <div className="row">
        <div className="col-3">Name</div>
        <div className="col-3">Sex</div>
        <div className="col-3">Status</div>
        <div className="col-3">Taxa</div>
      </div>
      {birds.map((bird) => (
        <div className="bird-preview" key={bird.id}>
          <div className="row">
            <div className="col-3"> {bird.name} </div>
            <div className="col-3"> {bird.sex} </div>
            <div className="col-3"> {bird.status} </div>
            <div className="col-3"> {bird.taxa} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BirdsList;
