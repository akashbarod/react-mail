import React, { Component } from "react";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import delete_data from 'delete.json'

class TableList extends Component {

  constructor(props) {
    super(props);
    this.state = {} 
  }

  render() {
    return (
      <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Deleted"
              category=""
              ctTableFullWidth
              ctTableResponsive
              content={
                <Table striped hover>
                  <tbody>
                    {delete_data.map((prop, key) => {
                      return (
                        <tr key={key}>
                          <td>{prop.mId}</td>
                            <td>{prop.unread}</td>
                            <td>{prop.subject}</td>
                            <td>{prop.content}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              }
            />
          </Col>


        </Row>
      </Grid>
    </div>
  );
  }
}

export default TableList;
