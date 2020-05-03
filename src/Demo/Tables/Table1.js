import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const rowClasses = 'custom-row-class';

<BootstrapTable keyField='id' data={ products } columns={ columns } rowClasses={ rowClasses } />