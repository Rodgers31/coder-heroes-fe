import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Space, Card } from 'antd';
import { connect } from 'react-redux';
import { Tabs } from 'antd';

const AvailableCourses = props => {
  const { TabPane } = Tabs;
  const { courses } = props;
  const [currentTab, SetcurrentTab] = useState();
  useEffect(() => {
    SetcurrentTab(courses.sessions);
  }, []);
  let Datetoday = new Date();
  let week = new Date();

  week.setDate(Datetoday.getDate() + 7);
  let today = Datetoday.toLocaleString('en-US', {
    day: '2-digit', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    month: '2-digit', // numeric, 2-digit, long, short, narrow
  }).replaceAll('/', '-');
  const renderTab = activeKey => {
    if (activeKey == 1) {
      SetcurrentTab(courses.sessions);
    }

    if (activeKey == 2) {
      let arr = courses.sessions.filter(item => {
        return item.start_date === today;
      });
      SetcurrentTab(arr);
    }

    if (activeKey == 3) {
      let arr = courses.sessions.filter(item => {
        let new_startDate = item.start_date.replaceAll('-', '/');
        let newDate = Date.parse(new_startDate);
        return newDate <= week.getTime() && newDate >= Datetoday.getTime();
      });

      SetcurrentTab(arr);
    }
  };

  return (
    <div>
      <div className="header">
        <h2
          style={{ fontSize: '2.5rem', color: '#ffca59', fontWeight: 'bold' }}
        >
          Browse our Programs
        </h2>
      </div>
      <Tabs
        animated="true"
        tabPosition="top"
        defaultActiveKey="1"
        onChange={renderTab}
      >
        <TabPane tab="All" key="1">
          <Card.Grid hoverable="False" className="flex">
            {currentTab &&
              currentTab.map(item => {
                return (
                  <Card className="card" hoverable="true" title={item.course}>
                    <div className="card-container">
                      <div className="left">
                        <h2>Start Date & Time: </h2>

                        <p>
                          {item.start_date} {item.start_time}
                        </p>
                        <h2>End Date & Time: </h2>
                        <p>
                          {item.end_date} {item.end_time}
                        </p>
                      </div>
                      <div className="right">
                        <img
                          className="image"
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        ></img>
                      </div>
                    </div>
                    <div className="buttonWrapper">
                      <button>Continue Booking</button>{' '}
                    </div>
                  </Card>
                );
              })}
          </Card.Grid>
        </TabPane>
        <TabPane tab="Today" key="2">
          <Card.Grid hoverable="False" className="flex">
            {currentTab &&
              currentTab.map(item => {
                return (
                  <Card className="card" hoverable="true" title={item.course}>
                    <div className="card-container">
                      <div className="left">
                        <h2>Start Date & Time: </h2>

                        <p>
                          {item.start_date} {item.start_time}
                        </p>
                        <h2>End Date & Time: </h2>
                        <p>
                          {item.end_date} {item.end_time}
                        </p>
                      </div>
                      <div className="right">
                        <img
                          className="image"
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        ></img>
                      </div>
                    </div>
                    <div className="buttonWrapper">
                      <button>Continue Booking</button>{' '}
                    </div>
                  </Card>
                );
              })}
          </Card.Grid>
        </TabPane>
        <TabPane tab="This Week" key="3">
          <Card.Grid hoverable="False" className="flex">
            {currentTab &&
              currentTab.map(item => {
                return (
                  <Card className="card" hoverable="true" title={item.course}>
                    <div className="card-container">
                      <div className="left">
                        <h2>Start Date & Time: </h2>

                        <p>
                          {item.start_date} {item.start_time}
                        </p>
                        <h2>End Date & Time: </h2>
                        <p>
                          {item.end_date} {item.end_time}
                        </p>
                      </div>
                      <div className="right">
                        <img
                          className="image"
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        ></img>
                      </div>
                    </div>
                    <div className="buttonWrapper">
                      <button>Continue Booking</button>{' '}
                    </div>
                  </Card>
                );
              })}
          </Card.Grid>
        </TabPane>
        <TabPane tab="1:1 Sessions" key="4">
          1:1 Sessions
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    courses: state.parentReducer,
  };
};

export default connect(mapStateToProps)(AvailableCourses);
