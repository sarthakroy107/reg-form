import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

const PaginationController = ({ offset, limit, total }: { offset: string, limit: string, total: number }) => {
  const count = Math.ceil(parseInt(offset) / parseInt(limit));
  return (
    <div className="w-full flex justify-center">
      <Pagination>
        <PaginationContent>
          {
            count > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`/college-admin-panel?offset=${parseInt(offset) - 50}&limit=${limit}`} />
              </PaginationItem>
            )
          }
          {
            count > 0 && (
              <PaginationItem>
                <PaginationLink href={`/college-admin-panel?offset=${parseInt(offset) - 25}&limit=${limit}`}>{count}</PaginationLink>
              </PaginationItem>
            )
          }
          <PaginationItem>
            <PaginationLink isActive href={`/college-admin-panel?offset=${parseInt(offset)}&limit=${limit}`}>{count + 1}</PaginationLink>
          </PaginationItem>
          {
            parseInt(offset) + 25 < total && (
              <PaginationItem>
                <PaginationLink href={`college-admin-panel?offset=${parseInt(offset) + 25}&limit=${limit}`}>{count + 2}</PaginationLink>
              </PaginationItem>
            )
          }
          {
            parseInt(offset) + 50 < total && (
              <PaginationItem>
                <PaginationNext href={`/college-admin-panel?offset=${parseInt(offset) + 50}&limit=${limit}`} />
              </PaginationItem>
            )
          }
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationController