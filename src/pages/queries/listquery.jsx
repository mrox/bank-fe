import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/custom/button'

// import {AlertDialogDemo} from './showdata';
export function ListQuery() {
  const [queries, setQueries] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://siteb-api.tuyentt.com/v1/erequest')
      const data = await response.json()
      setQueries(data)
    }
    fetchData()
  }, [])

  const DownloadButton = ({ textOutput }) => {
    console.log(textOutput)
    const file = new Blob([textOutput.data], { type: 'text/plain' })
    const fileName = textOutput.id + '.txt'
    return (
      <Button variant='outlined'>
        <a
          download={fileName}
          target='_blank'
          rel='noreferrer'
          href={URL.createObjectURL(file)}
          style={{
            textDecoration: 'inherit',
            color: 'inherit',
          }}
        >
          Download
        </a>
      </Button>
    )
  }

  return (
    <Table>
      <TableCaption>Lịch sử truy vấn</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px] text-center'>STT</TableHead>
          <TableHead>ID Truy vấn</TableHead>
          <TableHead>Thời gian tạo</TableHead>
          <TableHead className='text-center'>Thời gian phản hồi</TableHead>
          <TableHead className='text-center'>Trạng thái</TableHead>
          <TableHead className='text-center'>Dữ liệu</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {queries.map((query, index) => (
          <TableRow key={query.id}>
            <TableCell className='w-[100px]  text-center'>
              {index + 1}
            </TableCell>
            <TableCell>{query.id}</TableCell>
            <TableCell>{query.createdAt}</TableCell>
            <TableCell className='text-center'>
              {query.status !== 'success' ? '-' : query.updatedAt}
            </TableCell>
            <TableCell className='text-center'>{query.status}</TableCell>
            <TableCell className='text-center'>
              <DownloadButton textOutput={query} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell>
      </TableRow>
    </TableFooter> */}
    </Table>
  )
}
