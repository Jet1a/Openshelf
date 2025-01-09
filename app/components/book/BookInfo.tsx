import React from "react";
import Heading from "../Heading";
import { format } from "date-fns";
import { SafeListing } from "@/app/types";
import BookRental from "./BookRental";
import { Range } from "react-date-range";
interface BookInfoProps {
  book: SafeListing;
  category: string | undefined;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  onSubmit: () => void;
  disabled: boolean;
  disabledDates: Date[];
}

const BookInfo = ({
  book,
  category,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates,
}: BookInfoProps) => {
  const formattedDescription = book.description.replace(/\n/g, "<br>");

  const formattedDate = () => {
    return format(new Date(book.published), "MMMM d, yyyy");
  };

  return (
    <div className="flex flex-col items-start justify-center space-y-2 border rounded-lg p-10 w-full max-w-[1200px]">
      <Heading
        title={book.title}
        subtitle={`by ${book.author} | ${category}`}
      />
      <div className="py-2 w-full">
        <BookRental
          onChangeDate={onChangeDate}
          dateRange={dateRange}
          onSubmit={onSubmit}
          disabled={disabled}
          disabledDates={disabledDates}
        />
      </div>
      <div className="flex flex-col items-start justify-start space-y-2 break-words">
        <h1 className="text-xl font-semibold">Description</h1>
        <span
          className="text-wrap"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        />
        <div className="flex flex-col items-start justify-start space-y-2">
          <h1 className="text-xl font-semibold">Product Details</h1>
          <span className="font-light">
            Publisher <span className="font-normal">{book.imprint}</span>
          </span>
          <span className="font-light">
            Publish Date <span className="font-normal">{formattedDate()}</span>
          </span>
          <span className="font-light">
            Pages <span className="font-normal">{book.page} pages</span>
          </span>
          <span className="font-light">
            Language <span className="font-normal">English</span>
          </span>
          <span className="font-light">
            ISBN <span className="font-normal">{book.isbn}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;