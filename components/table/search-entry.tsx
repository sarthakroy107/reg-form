'use client';

import { useEffect, useState } from "react";
import { Command, CommandDialog, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { LucideSearch } from "lucide-react";
import { useDebounce } from 'use-debounce';
import { useQuery } from '@tanstack/react-query';
import { SyncLoader } from 'react-spinners'

const SearchEntry = () => {
  const [search, setSearch] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, []);

  return (
    <>
      <button onClick={() => setOpen(true)} className="flex justify-between w-[205px] p-1 px-1.5 rounded-[3px] bg-slate-200 shadow-sm shadow-black/10 text-sm bg-discord m-1.5">
        <div className="flex gap-x-2 items-center">
          <LucideSearch size="14" />
          <p>Search</p>
        </div>
        <kbd className="bg-discord_darkest text-black/25 text-xs p-[2px] rounded-[2px]">⌘+k</kbd>
      </button>
      <CommandDialog open={open} onOpenChange={() => setOpen(false)}>
        <Command shouldFilter={false} >
          <CommandInput value={search} onValueChange={setSearch} className="" placeholder="Search member and profile in server" />
          <SeacrhResults query={search} />
        </Command>
      </CommandDialog>
    </>
  )
}

export default SearchEntry

const SeacrhResults = ({ query }: { query: string }) => {
  const [debouncedSearchQuery] = useDebounce(query, 500);

  const enabled = !!debouncedSearchQuery;
  const { data, isLoading: isLoadingOrig, isError } = useQuery({

    queryKey: ['search', debouncedSearchQuery],
    queryFn: async () => {
      const res = await fetch(`https://api.slingacademy.com/v1/sample-data/users?search=${debouncedSearchQuery}`, { cache: 'no-cache' });
      const data: TDummyAPIData = await res.json();
      return data;
    },
    enabled,
  });

  const isLoading = enabled && isLoadingOrig;
  if (!enabled) return null;
  console.log(data);
  return (
    <CommandList>
      {isLoading && <div className="w-full h-24 flex justify-center items-center"><SyncLoader color="#3676d6" /></div>}
      {!isError && !isLoading && !data?.users.length && (
        <CommandEmpty>No results found</CommandEmpty>
      )}
      {isError && <div className="p-4 text-sm">Something went wrong</div>}

      {data?.users.map((user, index) => {
        return (
          <CommandItem key={index} value={user.first_name} >
            {user.first_name} {user.last_name}
          </CommandItem>
        );
      })}
    </CommandList>
  );
}