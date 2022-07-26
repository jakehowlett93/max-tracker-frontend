import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

type Props = {
  showToast: boolean,
  setShowToast: (input: boolean) => void;
}

function ResponseToast({showToast, setShowToast}: Props) {

  return (
    <ToastContainer position="bottom-end">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Lift Submission</strong>
            <small>Now</small>
          </Toast.Header>
          <Toast.Body>Success!</Toast.Body>
        </Toast>
    </ToastContainer>
  );
}

export default ResponseToast;
