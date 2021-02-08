import React, { Component } from 'react'
import { Grid, Row, Col, Table, Button } from 'react-bootstrap'
import { Card } from 'components/Card/Card.jsx'
import spam from 'spam.json'

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Spam"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <tbody>
                      {spam.map((prop, key) => {
                        console.log('-----------', prop.unread);
                        
                        return prop.unread == true ? (
                          <tr key={key}>
                            <td>{prop.mId}</td>
                            <td>{prop.unread}</td>
                            <td>{prop.subject}</td>
                            <td>{prop.content}</td>
                          </tr>
                        ) : (
                          <tr key={key} style={{ backgroundColor: 'yellow' }}>
                            <td>{prop.mId}</td>
                            <td>{prop.unread}</td>
                            <td>{prop.subject}</td>
                            <td>{prop.content}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default UserProfile
