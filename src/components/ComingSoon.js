import { Button, Modal } from 'react-bootstrap';

import { useState } from 'react';
function ComingSoon(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className={props.styleClass} onClick={handleShow}>Get a quote</button>
      <Modal show={show} onHide={handleClose} centered>
       
        <Modal.Body className="pt-5">
          <h3 className="text-center">Coming Soon !!</h3>
          </Modal.Body>
        <Modal.Footer className="border-0 text-center">
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ComingSoon;