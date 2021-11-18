import React, { useEffect } from 'react';
import { Card } from 'antd';
import '../../../styles/index.less';
import { CloseOutlined } from '@ant-design/icons';

const InstructorBookingCardModal = props => {
  const {
    currentModalProps,
    setCurrentModalProps,
    setModalHidden,
    text,
  } = props;

  const {
    start_date,
    end_date,
    start_time,
    end_time,
    size,
    subject,
  } = currentModalProps;

  const closeModal = () => {
    setModalHidden(true);
    setCurrentModalProps(false);
  };

  return (
    <div class="instructor-booking-card">
      <Card>
        <h1>{subject}</h1>
        <p>
          {text.when}
          {start_time}
        </p>
        <p>
          {text.seize}
          {size}
        </p>
        <p>
          {text.description}
          {subject}
        </p>
        <button>Book Course</button>
        <button className="close-modal-btn" onClick={closeModal}>
          <CloseOutlined />
        </button>
      </Card>
    </div>
  );
};
export default InstructorBookingCardModal;