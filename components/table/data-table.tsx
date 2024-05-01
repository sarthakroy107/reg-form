import React, { Fragment } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link';
import PaginationController from './pagination-section';

const StudentaDataTable = async ({ offset, limit }: { offset: string, limit: string }) => {
  const res = await fetch(`https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`, { cache: 'no-cache' });
  const data: TDummyAPIData = await res.json();
  console.log(data);
  return (
    <Fragment>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID no.</TableHead>
            <TableHead>Firstname</TableHead>
            <TableHead>Lastname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact number</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data.users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell><Link href={'hndk'} className='text-blue-400 hover:underline'>Details</Link></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <PaginationController offset={offset} limit={limit} total={data.total_users} />
    </Fragment>
  )
}

export default StudentaDataTable