import React from 'react';

class Table extends React.Component {
  render() {
    const list = this.props.list;
    
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>FULL NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>GENDER</th>
              <th>MARRIED</th>
            </tr>
            {list.map(item => {
              return (
                <tr>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.gender}</td>
                  <td>{item.marry}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;