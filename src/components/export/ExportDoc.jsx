import { Button, Grid } from "@mui/material"
import { FaRegFilePdf, FaRegFileExcel } from "react-icons/fa6"
import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

const handleDownload = async fileName => {
  try {
    const response = await axios.get(`${BASE_URL}/estabelecimento/${fileName}/download`, {
        responseType: 'blob'
    })

    const url = window.URL.createObjectURL(new Blob([response.data]))
    
    const link = document.createElement('a')
    link.href = url
    link.download = fileName

    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
  } catch (error) {
    console.error('Erro durante o download:', error)
  }
};

const ExportDoc = () => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6}>
        <Button onClick={() => handleDownload('estabelecimentos.pdf')} style={{ width: '100%' }}>
          <Grid container alignItems="center">
            <Grid item>
              <FaRegFilePdf style={{ marginRight: '8px', fontSize: '100px', color: 'red' }} />
            </Grid>
          </Grid>
        </Button>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Button onClick={() => handleDownload('estabelecimentos.xlsx')} style={{ width: '100%' }}>
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