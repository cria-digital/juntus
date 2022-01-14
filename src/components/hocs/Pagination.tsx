import Input from "components/common/Input";
import Loading from "components/common/Loading";
import { useState } from "react";

const chunk = (arr: any, size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v: any, i: any) =>
    arr.slice(i * size, i * size + size)
  );

export default function Pagination(props: any) {
  const [pageIndex, setPage] = useState(1);
  const { search = true } = props;

  if (!props.items.length) return <Loading />;

  const dividedItems = chunk(props.items, props.limit);
  const pagesNumber = Math.floor(dividedItems.length / props.limit);
  const pagesArray = Array.from(Array(pagesNumber).keys());

  const { Component } = props;

  return (
    <div className="pagination">
      {search && (
        <div style={{ width: "30%", marginLeft: "auto", marginRight: "5%" }}>
          <Input
            type="search"
            name="page"
            placeholder="Busque por origem, veículo, carroceria..."
          />
        </div>
      )}
      <div {...props.containerProps}>
        {dividedItems[pageIndex - 1].map((item: any) => {
          return <Component key={item.id} {...item} {...props.itemProps} />;
        })}
      </div>

      <div className="pagination-buttons">
        {pagesArray.map((page: any) => {
          return (
            <button
              disabled={pageIndex === page + 1}
              key={page}
              onClick={() => setPage(page + 1)}
              className={page === page ? "active" : ""}
            >
              {page + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
