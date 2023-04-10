
import { useState ,useEffect} from 'react';

import { DataGrid , GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector, } from "@mui/x-data-grid";


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}


const Customer = () => {
  const [tax, setTax] = useState([]);
  
  
  const columns = [
    { field: "id", headerName: "ID", headerAlign: "left", fontSize: 40, width: 120},
    { field: "email", headerName: "EMAIL", headerAlign: "left", fontSize: 40, width: 240},
    { field: "name", headerName: "NAME", headerAlign: "left", fontSize: 40, width: 240},
    { field: "password", headerName: "PASSWORD", headerAlign: "left", fontSize: 40, width: 240},
    ];

 useEffect(() => {
    fetch('http://127.0.0.1:8000/users/list/')
      .then(response => response.json())
      .then(data => {
        
        setTax(data);
      })
      .catch(error => console.error(error));
  }, []);
  
  console.log(tax);

  return (
   
 <DataGrid
  rows={tax}
  columns={columns}
  slots={{
    toolbar: CustomToolbar,
  }}
  checkboxSelection
  pageSize={20}
  rowsPerPageOptions={[20]}
/>
  );
};

export default Customer;









