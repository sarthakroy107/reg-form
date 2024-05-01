import AddNewCollege from '@/components/add-new-college';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
type TCollegeDetails = {
  id: number,
  college_name: string,
  hostname: string,
  status: 'open' | 'close'
}
const constants: TCollegeDetails[] = [
  { id: 1, college_name: 'ABN Seal College', hostname: 'college1.com', status: 'open'},
  { id: 2, college_name: 'Cooch Beahar College', hostname: 'college2.com', status: 'close' },
  { id: 3, college_name: 'Dinhata College', hostname: 'college2.com', status: 'open' },
]

const Page = async () => {
  
  return (
    <div className='outer-container'>
      <h2 className='h2-heading'>CLT - Admin Panel</h2>
      <AddNewCollege />
      <Table>
        <TableCaption>CLT - Admin Panel</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>COLLEGE NAME</TableHead>
            <TableHead>HOSTNAME</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            constants.map((college, index) => (
              <TableRow key={index}>
                <TableCell>{college.id}</TableCell>
                <TableCell>{college.college_name}</TableCell>
                <TableCell>{college.hostname}</TableCell>
                <TableCell>{college.status}</TableCell>
                <TableCell><Link href={'/college-admin-panel'} target='_blank' className='text-blue-400 hover:underline'>Details</Link></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default Page