import React, {useState} from "react";
import {data} from "../data";
import {Form, Container, Row, Col, Table} from "react-bootstrap";

function Select() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleState = (e) => {
    setState(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const availableState = data.find((c) => c.name === country) || {};

  const availableCities = availableState?.states?.find((s) => s.name === state);

  return (
    <div>
      <Container style={{marginTop: 20}}>
        <Row>
          <Col>
            <Form.Select aria-label="select country" value={country} onChange={handleCountry}>
              <option>Select Country</option>
              {data.map((item, index) => {
                return (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="select state" value={state} onChange={handleState}>
              <option>Select State</option>
              {availableState.states &&
                availableState.states.map((item, index) => {
                  return (
                    <option value={item.name} key={index}>
                      {item.name}
                    </option>
                  );
                })}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="select City" value={city} onChange={handleCity}>
              <option>Select City</option>
              {availableCities?.cities.map((item, index) => {
                return (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
        </Row>
      </Container>
      <Table striped bordered hover style={{marginTop: 20}}>
        <thead>
          <tr>
            <th>Selected Country</th>
            <th>Selected State</th>
            <th>Selected City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{cursor: "pointer"}}>
              <>
                {country}
                {country.length > 1 && (
                  <i className="fa fa-trash-o" aria-hidden="true" onClick={() => setCountry("")}></i>
                )}
              </>
            </td>
            <td style={{cursor: "pointer"}}>
              <>
                {state}
                {state.length > 1 && <i className="fa fa-trash-o" aria-hidden="true" onClick={() => setState("")}></i>}
              </>
            </td>
            <td style={{cursor: "pointer"}}>
              <>
                {city}
                {city.length > 1 && <i className="fa fa-trash-o" aria-hidden="true" onClick={() => setCity("")}></i>}
              </>
            </td>
          </tr>
        </tbody>
      </Table>
      <div></div>
    </div>
  );
}

export default Select;
