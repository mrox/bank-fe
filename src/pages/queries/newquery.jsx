import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'
import { Button } from '@/components/custom/button'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Textarea } from '@/components/ui/textarea'
import { sha256 } from 'js-sha256'

export default function NewQuery() {
  const form = useForm()

  const onSubmit = (data) => {
    data.data = JSON.stringify({
      cccd: sha256.hex(data.cccd),
    })
    delete data.cccd
    fetch('https://siteb-api.tuyentt.com/v1/erequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.to && data.code !== 200) {
          if (data.message.includes('error:1E08010C:DECODER')) {
            alert('Không thể sử dụng mã khoá đơn vị này để mã hoá dữ liệu')
            return
          }
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <Layout>
      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>
              Tạo mới truy vấn
            </h2>
            {/* <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p> */}
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          {/* <DataTable data={tasks} columns={columns} /> */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='cccd'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Căn cước công dân</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Nhập thông tin căn cước công dân'
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='to'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Đơn vị đọc dữ liệu</FormLabel>
                    <FormControl>
                      <Input placeholder='Nhập đơn vị đọc dữ liệu' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='publicKey'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mã khoá đơn vị</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder='Nhập thông tin mã khoá đơn vị'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </div>
      </LayoutBody>
    </Layout>
  )
}
