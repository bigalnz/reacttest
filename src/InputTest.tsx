import React, { useState, useEffect } from "react";

const InputTest = () => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [status, setStatus] = useState("");
  const [taxa, setTaxa] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    console.log("here");
    fetch("http://localhost:8080/api/enums/taxa")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("now here");
        console.log(data);
        setOptions(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bird = { name, sex, status, taxa };
    console.log(bird);
    fetch("http://localhost:8080/api/kiwis/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bird),
    }).then(() => {
      console.log("new bird added");
    });
  };

  return (
    <div className="container py-4 my-4 w-25 border">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3">
            <label className="form-label">Name: </label>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="mb-3">
              <select
                className="form-select"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="" disabled selected>
                  Sex
                </option>
                <option value="FEMALE">Female</option>
                <option value="MALE">Male</option>
              </select>
            </div>
          </div>

          <div className="col-4">
            <div className="mb-3">
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled selected>
                  Status
                </option>
                <option value="ALIVE">Alive</option>
                <option value="DECEASED">Deceased</option>
              </select>
            </div>
          </div>

          <div className="col-4">
            <div className="mb-3">
              <select
                className="form-select"
                value={taxa}
                onChange={(e) => setTaxa(e.target.value)}
              >
                <option value="" disabled selected>
                  Taxa
                </option>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.displayName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="d-grid">
          <button className="btn btn-primary btn-lg" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputTest;
