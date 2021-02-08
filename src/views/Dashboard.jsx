import React, { Component } from 'react'
import { Card } from 'components/Card/Card.jsx'
import { Grid, Row, Col, Table, Button } from 'react-bootstrap'
import inbox from 'inbox.json'
import delete_data from 'delete.json'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display_inbox_data: [],
    }
  }

  componentDidMount() {
    var array = [...inbox]

    var filteredItems = array.filter((item) =>
      delete_data.some((data) => data.mId !== item.mId),
    )

    this.setState({
      display_inbox_data: filteredItems.length > 0 ? filteredItems : inbox,
    })
  }

  delete_data = (e, key) => {
    e.preventDefault()

    console.log(':: clicked ::')

    var array = [...inbox] // make a separate copy of the array

    delete_data.push(array[key])

    array.splice(key, 1)

    this.setState({ display_inbox_data: array })
  }

  render() {
    const { display_inbox_data } = this.state

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Inbox"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <tbody>
                      {display_inbox_data.map((prop, key) => {
                        return prop.unread == true ? (
                          <tr key={key}>
                            <td>{prop.mId}</td>
                            <td>{prop.unread}</td>
                            <td>{prop.subject}</td>
                            <td>{prop.content}</td>
                            <td>
                              <Button
                                variant="primary"
                                className="form_button"
                                onClick={(e) => this.delete_data(e, key)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ) : (
                          <tr key={key} style={{ backgroundColor: 'wheat' }}>
                            <td>{prop.mId}</td>
                            <td>{prop.unread}</td>
                            <td>{prop.subject}</td>
                            <td>{prop.content}</td>
                            <td>
                              <Button
                                variant="primary"
                                className="form_button"
                                onClick={(e) => this.delete_data(e, key)}
                              >
                                Delete
                              </Button>
                            </td>
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

export default Dashboard
