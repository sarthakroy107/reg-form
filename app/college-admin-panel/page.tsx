import PortalStatus from "@/components/modals/portal-status";
import StudentaDataTable from "@/components/table/data-table";
import SearchEntry from "@/components/table/search-entry";
import Stats from "@/components/table/stats";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const offset = searchParams["offset"] ?? "0";
  const limit = searchParams["limit"] ?? "25";

  return (
    <div className="z-0 outer-container md:w-[90%] lg:w-3/4 mt-16">
      <h2 className="h2-heading">COLLEGE NAME - Admin Panel</h2>
      <Stats />
      <div className="flex justify-between">
        <SearchEntry />
        <PortalStatus />
      </div>
      <StudentaDataTable offset={offset} limit={limit} />
    </div>
  );
};

export default Page;
