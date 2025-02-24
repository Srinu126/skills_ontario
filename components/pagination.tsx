"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";

export default function BooksPagination({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <>
      <Pagination className="text-white text-xl font-bold">
        <PaginationContent>
          <PaginationItem>
            <Button
              disabled={page === 1}
              className="font-bold text-xl"
              onClick={() => setPage((page) => page - 1)}
            >
              Previous
            </Button>
          </PaginationItem>
          <PaginationItem>
            <span>
              Page {page} of {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <Button
              className="font-bold text-xl"
              onClick={() => setPage((page) => page + 1)}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
