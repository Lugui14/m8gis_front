import { Button, Grid } from "@mui/material";
import { FaRegFilePdf, FaRegFileExcel } from "react-icons/fa6";

const ExportDoc = () => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6}>
        <Button onClick={''} style={{ width: '100%' }}>
          <Grid container alignItems="center">
            <Grid item>
              <FaRegFilePdf style={{ marginRight: '8px', fontSize: '100px', color: 'red' }} />
            </Grid>
          </Grid>
        </Button>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Button onClick={''} style={{ width: '100%' }}>
          <Grid container alignItems="center">
            <Grid item>
              <FaRegFileExcel style={{ marginRight: '8px', fontSize: '100px', color: 'green' }} />
            </Grid>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  )
}

export default ExportDoc;