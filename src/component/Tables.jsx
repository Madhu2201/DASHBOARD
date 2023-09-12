import Table from 'react-bootstrap/Table';
import Checkboxs from './checkboxs';

function Tables() {
  return (
    
    <Table striped bordered hover size="sm" id='table1' >
      <thead>
        <tr>
          <th><Checkboxs/></th>
          <th>Invoice ID</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Payable Amount</th>
          <th>Paid Amount</th>
          <th>Due</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Checkboxs/></td>
          <td style={{color:"blue"}}>#AHGA58</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <td><Checkboxs/></td>
          <td style={{color:"blue"}}>#AHGA58</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <td><Checkboxs/></td>
          <td style={{color:"blue"}}>#AHGA58</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <td><Checkboxs/></td>
          <td style={{color:"blue"}}>#AHGA58</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <td><Checkboxs/></td>
          <td style={{color:"blue"}}>#AHGA58</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <td><Checkboxs/></td>
          <td style={{color:"blue"}}>#AHGA58</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <td><Checkboxs/></td>
          <td style={{color:"blue"}}>#AHGA58</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <td><Checkboxs/></td>
          <td style={{color:"blue"}}>#AHGA58</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
        <tr>
        <td><Checkboxs/></td>
          <td style={{color:"blue"}}>#AHGA58</td>
          <td>23/09/2022</td>
          <td>Jacob Marcus</td>
          <td>$100</td>
          <td>$000</td>
          <td>$000</td>
        </tr>
      </tbody>
    </Table>
    
  );
}

export default Tables;