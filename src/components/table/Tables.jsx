import "./tables.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {
  const rows = [
    {
      id: 12322,
      product: "ROG Zephyrus G13",
      img: "https://m.media-amazon.com/images/I/41Mjo3wOw2L._AC_SY580_.jpg",
      customer: "Indra Prasetyo",
      date: "1 March",
      amount: 1700,
      method: "Cash on Delivery",
      status: "Approved"
    },
    {
      id: 12133,
      product: "GPD Micro PC",
      img: "https://m.media-amazon.com/images/I/41YY7ntcGaL._AC_SY580_.jpg",
      customer: "Alvin Galang",
      date: "1 March",
      amount: 785,
      method: "Online",
      status: "Pending"
    },
    {
      id: 12432,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/41RDMq6TZUL._AC_SY780_.jpg",
      customer: "Sad Vika Alam",
      date: "1 March",
      amount: 1500,
      method: "Online",
      status: "Approved"
    },
    {
      id: 11242,
      product: "LENOVO NEWEST",
      img: "https://m.media-amazon.com/images/I/41UPQX8fclL._AC_.jpg",
      customer: "Randi Safa",
      date: "1 March",
      amount: 1000,
      method: "Cash on Delivery",
      status: "Approved"
    },
    {
      id: 12323,
      product: "GygaByte G5 KD",
      img: "https://m.media-amazon.com/images/I/41K4d5t2-BS._AC_SY580_.jpg",
      customer: "Dewa Anggoro",
      date: "1 March",
      amount: 900,
      method: "Online",
      status: "Approved"
    },
    {
      id: 12324,
      product: "AZUS Rog Strix",
      img: "https://m.media-amazon.com/images/I/41xTNCYzPfL._AC_SY580_.jpg",
      customer: "Rafa Fakhrizi",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending"
    },
  ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellwrapper">
                  <img src={row.img} alt="" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">$ {row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables;