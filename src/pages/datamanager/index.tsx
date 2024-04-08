import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { tasks } from './data/tasks'
import { Button } from '@/components/custom/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function QueryManager() {
  const [publicKey, setPublicKey] = useState('')
  const [privateKey, setPrivateKey] = useState('')

  useEffect(() => {
    axios
      .get('https://sitea-api.tuyentt.com/v1/erequest/config')
      .then(function (response: any) {
        setPublicKey(response.data.publicKey)
        setPrivateKey(response.data.privateKey)
      })
      .catch(function (error: any) {
        console.log(error)
      })
  }, [])
  const createNewKey = () => {
    axios
      .post('https://sitea-api.tuyentt.com/v1/erequest/config')
      .then(function (response: any) {
        setPublicKey(response.data.publicKey)
        setPrivateKey(response.data.privateKey)
      })
      .catch(function (error: any) {
        console.log(error)
      })
  }
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>

      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>
              Mã khoá dữ liệu
            </h2>
            {/* <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p> */}
          </div>
          <div>
            <Button onClick={createNewKey} variant='default'>
              Tạo mã khoá mới
            </Button>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          {/* <DataTable data={tasks} columns={columns} /> */}
          Khoá công khai
          <Textarea rows={10} value={publicKey} />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          {/* <DataTable data={tasks} columns={columns} /> */}
          Khoá bí mật
          <Textarea rows={15} value={privateKey} />
        </div>
      </LayoutBody>
    </Layout>
  )
}
