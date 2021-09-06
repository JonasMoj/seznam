import React, { useState } from "react";
import "./App.css";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import XLSX from 'xlsx'



function App() {
  const [tableData, setTableData] = useState([
    {
      name: "Karel Hanák",
      email: "Khanak@gmail.com",
      phone: "603 456 779",
      birth: null,
      gender: "Muž",
      order: "21.12.2020",
      price: 49999,
    },
    {
      name: "Hanka Hanák",
      email: null,
      phone: "775 685 975",
      birth: "29.8.1982",
      gender: "Žena",
      order: "01.08.2021",
      price: 399,
    },
    {
      name: "Karel Martínek",
      email: null,
      phone: "774 689 975",
      birth: "12.3.1972",
      gender: "Muž",
      order: "21.08.2021",
      price: 3999,
    },
    {
      name: "Ondra Hrdý",
      email: 'Hrdy@email.cz',
      phone: "774 685 966",
      birth: "22.4.1968",
      gender: "Muž",
      order: "10.10.2020",
      price: 38999,
    },
    {
      name: "Františka Drobná",
      email: 'Drobnaf@seznam.cz',
      phone: "774 685 975",
      birth: "22.3.1992",
      gender: "Žena",
      order: "21.10.2020",
      price: 35999,
    },
    {
      name: "Petr Pavel",
      email: "Pepa@gmail.com",
      phone: "609 518 765",
      birth: "12.10.1965",
      gender: "Muž",
      order: '21.01.2021',
      price: 4999,
    },
  ]);

  const columns = [
    {
      title: "Jméno",
      field: "name",
      filterPlaceholder: "Filtrovat dle jména",
      emptyValue: () => <em>Chybí informace</em>,
    },
    {
      title: "Email",
      field: "email",
      filterPlaceholder: "Filtrovat dle emailu",
      emptyValue: () => <em>Chybí informace</em>,
    },
    {
      title: "Telefoní číslo",
      field: "phone",
      filterPlaceholder: "Filtrovat dle telefonu",
      emptyValue: () => <em>Chybí informace</em>,
    },
    {
      title: "Datum narození",
      field: "birth",
      filtering: false,
      filterPlaceholder: "Filtrovat dle data narození",
      emptyValue: () => <em>Chybí informace</em>,
      type: "date",
    },
    {
      title: "Pohlaví",
      field: "gender",
      lookup: { Muž:"Muž", Žena:"Žena" },
      emptyValue: () => <em>Chybí informace</em>,
      searchable: false,
    },
    {
      title: "Datum objednávky",
      field: "order",
      filtering: false,
      filterPlaceholder: "Filtrovat dle data",
      emptyValue: () => <em>Chybí informace</em>,
      type: "date",
      
    },
    {
      title: "Hodnota objednávky",
      field: "price",
      emptyValue: () => <em>Chybí informace</em>,
      filtering: false,
      type: "currency",
      defaultSort: "asc",
      currencySetting: { currencyCode: "CZK", minimumFractionDigits: 0 },
    },
  ];
 
  
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
   
      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              console.log(newRow, oldRow);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
       
        
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          pageSizeOptions: [5, 10, 20, 25, 50, 100],
          exportButton: true,
          exportAllData: true,
          exportFileName: "Seznam zákazníků E Linkx",
          addRowPosition: "first",
          selection: true,
          paginationPosition: "bottom",
          actionsColumnIndex: -1,
          showTextRowsSelected: false,
          columnsButton: true,
          rowStyle:(data,index)=>index%2==0?{background:'whitesmoke'}:null
        }}
        title="Seznam zákazníků"
      />
    </div>
  );
}

export default App;
